package com.example.simplelogin.repository;

import com.example.simplelogin.model.Tour;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.simpledms.repository
 * fileName : FaqRepository
 * author : 502
 * date : 2023-05-18
 * description : FAQ JPA CRUD 인터페이스
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-05-18         502          최초 생성
 */
@Repository
public interface TourRepository extends JpaRepository<Tour, Integer> {
    //    title like 검색

    Page<Tour> findAllByTnameContaining(String tname , Pageable pageable);
    Page<Tour> findAllByMainContaining(String main , Pageable pageable);

    Page<Tour> findAllByTagOneContainingAndTagSecondContaining(String tagOne, String tagSecond, Pageable pageable);


    Page<Tour> findAllByReservationContaining(String reservation, Pageable pageable);

}