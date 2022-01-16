"use strict";var headerButton=document.querySelector(".header__button"),headerMenu=document.querySelector(".nav__menu"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle(),a.target.classList.contains("nav__menu-close")&&menuToggle()};var swiper=new Swiper(".intro__slider ",{slidesPerView:1,spaceBetween:100,grabCursor:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiper=new Swiper(".services__slider ",{slidesPerView:1,spaceBetween:10,grabCursor:!0,loop:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:10}}}),swiper=new Swiper(".works__slider ",{slidesPerView:1,spaceBetween:30,grabCursor:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:3,spaceBetween:30}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImhlYWRlckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlck1lbnUiLCJtZW51T3BlbmVkIiwibWVudVRvZ2dsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJjb250YWlucyIsInN3aXBlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJncmFiQ3Vyc29yIiwibG9vcCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyJdLCJtYXBwaW5ncyI6ImdCQUNNQSxDQUFBQSxZQUFZLENBQ2hCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEMsQ0FDSUMsVUFBVSxDQUFxQkYsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLEMsQ0FDakNFLFVBQVUsRyxDQUNSQyxVQUFVLENBQUcsVUFBSyxDQUN0QkQsVUFBVSxDQUFHLENBQUNBLFVBRFEsQ0FFdEJKLFlBQVksQ0FBQ00sU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsTUFBOUIsQ0FGc0IsQ0FHdEJKLFVBQVUsQ0FBQ0csU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsTUFBNUIsQ0FDRCxDLENBQ0RQLFlBQVksQ0FBQ1EsT0FBYixDQUF1QkgsVSxDQUN2QkksTUFBTSxDQUFDRCxPQUFQLENBQWlCLFNBQUNFLENBQUQsQ0FBa0IsQ0FDNUIsQ0FBQU4sVUFBVSxFQUFLTSxDQUFDLENBQUNDLFlBQUYsR0FBaUJDLFFBQWpCLENBQTBCWixZQUExQixDQUFmLEVBQTJEVSxDQUFDLENBQUNDLFlBQUYsR0FBaUJDLFFBQWpCLENBQTBCVCxVQUExQixDQUQvQixFQUUvQkUsVUFBVSxFQUZxQixDQUk3QkssQ0FBQyxDQUFDRyxNQUFGLENBQVNQLFNBQVQsQ0FBbUJRLFFBQW5CLENBQTRCLGlCQUE1QixDQUo2QixFQUs3QlQsVUFBVSxFQUVmLEMsSUFFR1UsQ0FBQUEsTUFBTSxDQUFHLEdBQUlDLENBQUFBLE1BQUosQ0FBVyxpQkFBWCxDQUE4QixDQUN6Q0MsYUFBYSxDQUFFLENBRDBCLENBRXpDQyxZQUFZLENBQUUsR0FGMkIsQ0FHekNDLFVBQVUsR0FIK0IsQ0FJekNDLElBQUksR0FKcUMsQ0FLekNDLFVBQVUsQ0FBRSxDQUNWQyxNQUFNLENBQUUscUJBREUsQ0FFVkMsTUFBTSxDQUFFLHFCQUZFLENBTDZCLENBQTlCLEMsQ0FXVFIsTUFBTSxDQUFHLEdBQUlDLENBQUFBLE1BQUosQ0FBVyxvQkFBWCxDQUFpQyxDQUM1Q0MsYUFBYSxDQUFFLENBRDZCLENBRTVDQyxZQUFZLENBQUUsRUFGOEIsQ0FHNUNDLFVBQVUsR0FIa0MsQ0FJNUNDLElBQUksR0FKd0MsQ0FLNUNJLFdBQVcsQ0FBRSxDQUNYLElBQUssQ0FDSFAsYUFBYSxDQUFFLENBRFosQ0FFSEMsWUFBWSxDQUFFLEVBRlgsQ0FETSxDQUwrQixDQUFqQyxDLENBYVRILE1BQU0sQ0FBRyxHQUFJQyxDQUFBQSxNQUFKLENBQVcsaUJBQVgsQ0FBOEIsQ0FDekNDLGFBQWEsQ0FBRSxDQUQwQixDQUV6Q0MsWUFBWSxDQUFFLEVBRjJCLENBR3pDQyxVQUFVLEdBSCtCLENBSXpDQyxJQUFJLEdBSnFDLENBS3pDQyxVQUFVLENBQUUsQ0FDVkMsTUFBTSxDQUFFLHFCQURFLENBRVZDLE1BQU0sQ0FBRSxxQkFGRSxDQUw2QixDQVN6Q0MsV0FBVyxDQUFFLENBQ1gsSUFBSyxDQUNIUCxhQUFhLENBQUUsQ0FEWixDQUVIQyxZQUFZLENBQUUsRUFGWCxDQURNLENBS1gsSUFBSyxDQUNIRCxhQUFhLENBQUUsQ0FEWixDQUVIQyxZQUFZLENBQUUsRUFGWCxDQUxNLENBVDRCLENBQTlCLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWFkZXIgTWVudVxyXG5jb25zdCBoZWFkZXJCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnV0dG9uXCIpO1xyXG5jb25zdCBoZWFkZXJNZW51OiBIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX21lbnVcIik7XHJcbmxldCBtZW51T3BlbmVkID0gZmFsc2U7XHJcbmNvbnN0IG1lbnVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgbWVudU9wZW5lZCA9ICFtZW51T3BlbmVkO1xyXG4gIGhlYWRlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICBoZWFkZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG59O1xyXG5oZWFkZXJCdXR0b24ub25jbGljayA9IG1lbnVUb2dnbGU7XHJcbndpbmRvdy5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICBpZiAoIG1lbnVPcGVuZWQgJiYgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyQnV0dG9uKSAmJiAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJNZW51KSl7XHJcbiAgICBtZW51VG9nZ2xlKCk7XHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9fbWVudS1jbG9zZScpKXtcclxuICAgICAgbWVudVRvZ2dsZSgpO1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmludHJvX19zbGlkZXIgXCIsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIHNwYWNlQmV0d2VlbjogMTAwLFxyXG4gIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICB9LFxyXG59KTtcclxuXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnNlcnZpY2VzX19zbGlkZXIgXCIsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgZ3JhYkN1cnNvcjogdHJ1ZSxcclxuICBsb29wOiB0cnVlLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi53b3Jrc19fc2xpZGVyIFwiLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH0sXHJcbiAgICA5OTI6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH1cclxuICB9LFxyXG59KTsiXX0=
