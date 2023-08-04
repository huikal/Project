package com.example.simplelogin.controller;

import com.example.simplelogin.model.Tour;
import com.example.simplelogin.service.TourService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.simpledms.controller
 * fileName : TourController
 * author : 502
 * date : 2023-05-18
 * description : Tour 컨트롤러
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-05-18         502          최초 생성
 */
@Slf4j
@RestController
@RequestMapping("/api")
//@PreAuthorize("hasRole('ADMIN')")

public class TourController {

    @Autowired
    TourService tourService;

    //     1)전체 조회 함수 + 2) Email(제목) like 검색 함수(페이징처리)
    @GetMapping("/tour")
    public ResponseEntity<Object> getTourMain(
            @RequestParam(required = false, defaultValue = "") String main,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "63") int size
    ) {
        try {
            // TODO: Pageable 객체 저장 : page(현재페이지번호)
            //                        , size(1페이지당개수) 값
//                  사용법) Pageable pageable
//                           = PageRequest.of(현재페이지, 1페이지당개수)
            Pageable pageable = PageRequest.of(page, size);



            Page<Tour> tourPage
                    = tourService.findAllByMainContaining(main, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("tour", tourPage.getContent()); // tour 객체배열
            response.put("currentPage", tourPage.getNumber()); // 현재페이지번호
            response.put("totalItems", tourPage.getTotalElements()); // 총개수(건수)
            response.put("totalPages", tourPage.getTotalPages()); // 총페이지수

            if (tourPage.isEmpty() == false) {
                // 성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                // 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage()); // 에러 출력
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //     1)전체 조회 함수 + 2) Email(제목) like 검색 함수(페이징처리)
    @GetMapping("/tours")
    public ResponseEntity<Object> getSearch(
            @RequestParam(required = false, defaultValue = "") String tname,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            // TODO: Pageable 객체 저장 : page(현재페이지번호)
            //                        , size(1페이지당개수) 값
//                  사용법) Pageable pageable
//                           = PageRequest.of(현재페이지, 1페이지당개수)
            Pageable pageable = PageRequest.of(page, size);

            Page<Tour> tourPage
                    = tourService.findAllByTnameContaining(tname, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("tour", tourPage.getContent()); // tour 객체배열
            response.put("currentPage", tourPage.getNumber()); // 현재페이지번호
            response.put("totalItems", tourPage.getTotalElements()); // 총개수(건수)
            response.put("totalPages", tourPage.getTotalPages()); // 총페이지수

            if (tourPage.isEmpty() == false) {
                // 성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                // 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage()); // 에러 출력
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




    //     1)전체 조회 함수 + 2) Email(제목) like 검색 함수(페이징처리)
    @GetMapping("/reservation")
    public ResponseEntity<Object> getTag(
            @RequestParam(required = false, defaultValue = "") String tagOne,
            @RequestParam(required = false, defaultValue = "") String tagSecond,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            // TODO: Pageable 객체 저장 : page(현재페이지번호)
            //                        , size(1페이지당개수) 값
//                  사용법) Pageable pageable
//                           = PageRequest.of(현재페이지, 1페이지당개수)
            Pageable pageable = PageRequest.of(page, size);

            Page<Tour> tourPage
                    = tourService.findAllByTagContaining(tagOne, tagSecond, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("tour", tourPage.getContent()); // tour 객체배열
            response.put("currentPage", tourPage.getNumber()); // 현재페이지번호
            response.put("totalItems", tourPage.getTotalElements()); // 총개수(건수)
            response.put("totalPages", tourPage.getTotalPages()); // 총페이지수

            if (tourPage.isEmpty() == false) {
                // 성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                // 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage()); // 에러 출력
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //     1)전체 조회 함수 + 2) Email(제목) like 검색 함수(페이징처리)
    @GetMapping("/resin")
    public ResponseEntity<Object> getRes(
            @RequestParam(required = false, defaultValue = "Y") String reservation_yn,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size
    ) {
        try {
            // TODO: Pageable 객체 저장 : page(현재페이지번호)
            //                        , size(1페이지당개수) 값
//                  사용법) Pageable pageable
//                           = PageRequest.of(현재페이지, 1페이지당개수)
            Pageable pageable = PageRequest.of(page, size);

            Page<Tour> tourPage
                    = tourService.findAllByResContaining(reservation_yn, pageable);

            Map<String, Object> response = new HashMap<>();
            response.put("tour", tourPage.getContent()); // tour 객체배열
            response.put("currentPage", tourPage.getNumber()); // 현재페이지번호
            response.put("totalItems", tourPage.getTotalElements()); // 총개수(건수)
            response.put("totalPages", tourPage.getTotalPages()); // 총페이지수

            if (tourPage.isEmpty() == false) {
                // 성공
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                // 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            log.debug(e.getMessage()); // 에러 출력
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // 전체 삭제 함수
    @DeleteMapping("/tour/delete")
    public ResponseEntity<Object> deleteAll() {
        try {
            // 전체 삭제 서비스 함수 호출
            tourService.removeAll();

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    새로운 Tour 저장 함수 : 리액트의 추가페이지
    @PostMapping("/tour")
    public ResponseEntity<Object> createTour(
            @RequestBody Tour tour
    ) {
        try {
            // 저장 서비스 함수 호출
            Tour tour2 = tourService.save(tour);

            return new ResponseEntity<>(tour2, HttpStatus.OK);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //   tour 수정 함수 : 리액트의 상세페이지(tid, tour 객체)
    @PutMapping("/tour/{tid}")
    public ResponseEntity<Object> updateTour(
            @PathVariable int tid,
            @RequestBody Tour tour
    ) {
        try {
            // 저장 서비스 함수 호출(수정)
            Tour tour2 = tourService.save(tour);

            return new ResponseEntity<>(tour2, HttpStatus.OK);
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //   tour 상세조회 함수 : 리액트의 상세페이지(tid)
    @GetMapping("/tour/{tid}")
    public ResponseEntity<Object> getTourId(@PathVariable int tid) {
        try {
            // 저장 서비스 함수 호출(수정)
            Optional<Tour> optionalTour = tourService.findById(tid);

            if(optionalTour.isPresent() == true) {
//                성공( optionalTour.get() : 객체 꺼내기 함수 )
                return new ResponseEntity<>(optionalTour.get(), HttpStatus.OK);
            } else {
//                데이터 없음(NO_CONTENT:204)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    //   부서 삭제 함수 : 리액트의 상세페이지(tid)
    @DeleteMapping("/tour/deletion/{tid}")
    public ResponseEntity<Object> deleteTour(
            @PathVariable int tid
    ) {
        try {
            // 삭제 서비스 함수 호출
            boolean bSuccess = tourService.removeById(tid);

            if(bSuccess == true) {
                // 삭제 성공
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                // 삭제할 데이터 없음
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            log.debug(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}