package com.example.simplelogin.service;

import com.example.simplelogin.model.Tour;
import com.example.simplelogin.repository.TourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * packageName : com.example.simpledms.service
 * fileName : TourService
 * author : 502
 * date : 2023-05-18
 * description : Tour 서비스 객체(클래스)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-05-18         502          최초 생성
 */
@Service
public class TourService {
    @Autowired
    TourRepository tourRepository;

    //    전체 조회 함수(페이징기능추가)
    public Page<Tour> findAll(Pageable pageable) {
        Page<Tour> page = tourRepository.findAll(pageable);

        return page;
    }

    //    전체 삭제 함수
    public void removeAll() {
        tourRepository.deleteAll();
    }

    //    제목(email) like 검색 함수(페이징처리)
    public Page<Tour> findAllByTnameContaining(
            String tname, Pageable pageable
    ) {
        Page<Tour> page
                = tourRepository
                .findAllByTnameContaining(tname, pageable);

        return page;
    }

    //    제목(email) like 검색 함수(페이징처리)
    public Page<Tour> findAllByMainContaining(
            String main, Pageable pageable
    ) {
        Page<Tour> page
                = tourRepository
                .findAllByMainContaining(main, pageable);

        return page;
    }

    //    제목(email) like 검색 함수(페이징처리)
    public Page<Tour> findAllByTagContaining(
            String tagOne, String tagSecond, Pageable pageable
    ) {
        Page<Tour> page
                = tourRepository
                .findAllByTagOneContainingAndTagSecondContaining(tagOne, tagSecond, pageable);

        return page;
    }

    //    제목(email) like 검색 함수(페이징처리)
    public Page<Tour> findAllByResContaining(
            String reservation, Pageable pageable
    ) {
        Page<Tour> page
                = tourRepository
                .findAllByReservationContaining(reservation, pageable);

        return page;
    }

    //    저장 함수 : 리액트 추가페이지, 상세페이지
    public Tour save(Tour tour) {
        Tour tour2 = tourRepository.save(tour);

        return tour2;
    }

    //   기본키로 상세 조회(1건조회) 함수 : 리액트 상세 페이지
    public Optional<Tour> findById(int tid) {
        Optional<Tour> optionalTour = tourRepository.findById(tid);

        return optionalTour;
    }

    //   tour 번호(cid) 로 삭제하는 함수 : 리액트 상세 페이지
    public boolean removeById(int tid) {
        if(tourRepository.existsById(tid) == true) {
//            삭제 실행
            tourRepository.deleteById(tid);
            return true;
        } else {
            return false;
        }
    }
}