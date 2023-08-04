package com.example.simplelogin.dto.tour;

import lombok.*;

/**
 * packageName : com.example.simpledms.dto.filedb
 * fileName : ResponseFileDto
 * author : 502
 * date : 2023-05-23
 * description : 프론트로 전송할 DTO(모델 속성 + 2가지 속성 추가)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-05-23         502          최초 생성
 */
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ResponseTourDto {
//    모델 속성들
    private Integer tid; // 파일번호(기본키, 시퀀스)
    private String tname; // 제목
    private String timg; // 이미지 파일명

//    추가 속성
    private Integer length; // 파일 크기
    private String fileDownloadUri; // 다운로드 url

    //    추가 속성
    }
