const n={en:{long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},ru:{long:{year:"2-digit",month:"numeric",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},fr:{long:{year:"2-digit",month:"numeric",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},de:{long:{year:"2-digit",month:"numeric",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},ua:{long:{year:"2-digit",month:"numeric",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},ko:{long:{year:"2-digit",month:"numeric",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}}},e="Hello, {name}!",o="Language",u="Menu",a="The screen resolution is too small",c={hello:e,language:o,menu:u,"main-menu":"------ Main menu ------",noscreen:a},m="Bonjour, {name}!",t="Langue",r="Menu",s="La résolution de l'écran est trop petite",i={hello:m,language:t,menu:r,"main-menu":"---- Menu principal ----",noscreen:s},l="Привет、{name}！",g="Язык",h="Меню",d="Разрешение экрана слишком маленькое",$={hello:l,language:g,menu:h,"main-menu":"-------- Меню --------",noscreen:d},y="Hallo, {name}!",k="Sprache",p="Menü",f="Die Bildschirmauflösung ist zu klein",w={hello:y,language:k,menu:p,"main-menu":"------ Hauptmenü ------",noscreen:f},M="Привіт, {name}!",H="Мова",L="Меню",j="Роздільна здатність екрану занадто мала",B={hello:M,language:H,menu:L,"main-menu":"----- Головне меню -----",noscreen:j},b="안녕하세요, {name}!",x="언어",z="메뉴",D="화면 해상도가 너무 작습니다",F={hello:b,language:x,menu:z,"main-menu":"------ 메인 메뉴 ------",noscreen:D},I=()=>({legacy:!1,globalInjection:!0,messages:{en:c,fr:i,ru:$,de:w,ua:B,ko:F},datetimeFormats:n});export{I as default};