package com.example.simplelogin.dto.tour;

import lombok.*;

/**
 * packageName : com.example.simpledms.dto.filedb
 * fileName : ResponseMessageDto
 * author : 502
 * date : 2023-05-23
 * description : 프론트로 메세지를 전송할 DTO
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-05-23         502          최초 생성
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ResponseMessageDto {
    private String message; // 프론트로 성공/실패 메세지 전송할 속성
}
