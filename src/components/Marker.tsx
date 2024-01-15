import {useCallback, useEffect} from "react";
import {StoreType} from "@/interface";
import { useRecoilValue } from "recoil";
import {mapState} from "@/atom";

interface MakersProps {
  store: StoreType;
}

export default function Marker({store}: MakersProps) {
  const map = useRecoilValue(mapState);

  const loadkakaoMaker = useCallback(()=>{
    if(map && store){

        // 현재 선택한 식당 데이터 마커 띄우기
        var imageSrc = store?.category
            ? `/images/markers/${store?.category}.png`
            : `/images/markers/default.png`,
          imageSize = new window.kakao.maps.Size(40, 40),
          imageOption = { offset: new window.kakao.maps.Point(27, 69) };

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        );
        var markerPosition = new window.kakao.maps.LatLng(
          store?.lat,
          store?.lng,
        );

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        marker.setMap(map);

        // 커서 오버시 윈포 인도우 생성
        var content = `<div class="infowindow">${store?.name}</div>`;

        // 커스텀 오버레이를 생성합니다
        var customOverlay = new window.kakao.maps.CustomOverlay({
            position: markerPosition,
            content: content,
            xAnchor: 0.6,
            yAnchor: 0.91,
        });

        // 마커에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'mouseover', function() {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            customOverlay.setMap(map);
        });

        // 마커에 마우스아웃 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'mouseout', function() {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
            customOverlay.setMap(null);
        });
  }}, [map, store]);

  useEffect(()=>{
    loadkakaoMaker();
  }, [loadkakaoMaker,map])

  return (
      <>

      </>
  )
}