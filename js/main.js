const Pages = ["Home","About","Skills","Portfolio","Contact"];
let CurrentSection = "";
function ChangeThePage(Page,isInit = false){
    let SectionElement = "";
    let IDOfDestinationPage = "";
    const hashtag = location.hash.substr(1);
    if (isInit){
        if (hashtag == ""){
            SectionElement = document.getElementById(Page);
            IDOfDestinationPage = Page;
            CurrentSection = Page;
        }else{
            SectionElement = document.getElementById(hashtag);
            IDOfDestinationPage = hashtag;
            CurrentSection = hashtag;
        }
    }else{
    
        SectionElement = document.getElementById(hashtag);
        IDOfDestinationPage = hashtag;
    }
    if (SectionElement){
        document.getElementById(CurrentSection).classList.remove("d-block");
        SectionElement.classList.add("d-block");
        CurrentSection = IDOfDestinationPage;
    }
}
ChangeThePage("Home",true);
window.addEventListener("hashchange",ChangeThePage,false);

const EmailBTNs = document.getElementsByClassName("email");

Array.prototype.forEach.call(EmailBTNs,OpenMailToLink);

function OpenMailToLink(item){
    item.addEventListener("click",function(){
        sendEmail();
    })
}
function sendEmail(){
    link = "mailto:"+getEmail();
    window.open(link, '_blank');
}
function getEmail() {
    const EmailBase64 = "TWVyYWouc2hlaWtoaGFhQGdtYWlsLmNvbQ"
    const TheE = decodeURIComponent(escape(window.atob( EmailBase64+"==" )));
    return TheE;
}