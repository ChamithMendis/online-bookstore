package org.onlinebookstorebackend.auth.config;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.annotation.PostConstruct;
import org.onlinebookstorebackend.common.exceptions.AppException;
import org.onlinebookstorebackend.users.dtos.UserDto;
import org.onlinebookstorebackend.users.entities.User;
import org.onlinebookstorebackend.users.mappers.UserMapper;
import org.onlinebookstorebackend.users.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Collections;
import java.util.Date;

@Component
public class UserAuthProvider {

    public final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserAuthProvider(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Value("${security.jwt.token.secret-key:secret-key}")
    private String secretKey;

    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(UserDto userDto) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + 3_600_000*24);

        return JWT.create()
                .withIssuer(userDto.getUsername())
                .withIssuedAt(now)
                .withExpiresAt(validity)
                .withClaim("firstName", userDto.getFirstName())
                .withClaim("lastName", userDto.getLastName())
                .sign(Algorithm.HMAC256(secretKey));
    }

    public Authentication validateToken(String token) {
        Algorithm algorithm = Algorithm.HMAC256(secretKey);

        JWTVerifier verifier = JWT.require(algorithm).build();

        DecodedJWT decodedJWT = verifier.verify(token);

        UserDto userDto = new UserDto(null,
                decodedJWT.getClaim("firstName").asString(),
                decodedJWT.getClaim("lastName").asString(),
                decodedJWT.getIssuer(),
                decodedJWT.getClaim("email").asString(),
                null,
                null);

//                UserDto.builder()
//                .username(decodedJWT.getIssuer())
//                .firstName(decodedJWT.getClaim("firstName").asString())
//                .lastName(decodedJWT.getClaim("lastName").asString())
//                .email(decodedJWT.getClaim("email").asString())
//                .build();

        return new UsernamePasswordAuthenticationToken(userDto, null, Collections.emptyList());
    }

    public Authentication validateTokenStrongly(String token) {
        Algorithm algorithm = Algorithm.HMAC256(secretKey);

        JWTVerifier verifier = JWT.require(algorithm).build();

        DecodedJWT decodedJWT = verifier.verify(token);

        User user = userRepository.findByUsername(decodedJWT.getIssuer())
                .orElseThrow(() -> new AppException("Unknown User", HttpStatus.NOT_FOUND));
        return new UsernamePasswordAuthenticationToken(userMapper.userToUserDto(user), null, Collections.emptyList());
    }
}
