package org.onlinebookstorebackend.common.config;

import org.onlinebookstorebackend.common.dtos.ErrorDto;
import org.onlinebookstorebackend.common.exceptions.AppException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(value = {AppException.class})
    @ResponseBody
    public ResponseEntity<ErrorDto> handleAppException(AppException ex) {
        return ResponseEntity.status(ex.getHttpStatus()).body(new ErrorDto(ex.getMessage()));
    }
}
