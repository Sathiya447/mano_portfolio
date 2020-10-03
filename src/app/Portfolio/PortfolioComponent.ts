import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Portfolio } from './Model/Portfolio';
import { PopUpImage } from './Model/PopUpImage';

@Component({
  selector: 'portfolio',
  templateUrl: './Portfolio.html'
})

export class PortfolioComponent {
  // member variables
  public mPortfolioList: Array<Portfolio> = new Array<Portfolio>();
  public mPopUpList: Array<PopUpImage> = new Array<PopUpImage>();
  public mShowPopUp: boolean = false;

  @ViewChild('gd') gdSection: ElementRef;

  constructor() {
    let pf1: Portfolio = new Portfolio();
    let pf2: Portfolio = new Portfolio();
    let pf3: Portfolio = new Portfolio();
    let pf4: Portfolio = new Portfolio();
    let pf5: Portfolio = new Portfolio();
    pf1.name = "Graphics Design";
    pf1.active = true;
    pf2.name = "UI/UX";
    pf3.name = "Web Design";
    pf4.name = "Motion Graphics";
    pf5.name = "Branding design";
    this.mPortfolioList.push(pf1, pf2, pf3, pf4, pf5);
    // graphics design
    let pop1: PopUpImage = new PopUpImage();
    let pop2: PopUpImage = new PopUpImage();
    let pop3: PopUpImage = new PopUpImage();
    let pop4: PopUpImage = new PopUpImage();
    pop1.src = "../../assets/img/graphics_popup.jpg";
    pop2.src = "../../assets/img/manipulation_popup.jpg";
    pop3.src = "../../assets/img/de_popup.jpg";
    pop4.src = "../../assets/img/jwel_popup.jpg";
    this.mPopUpList.push(pop1, pop2, pop3, pop4);

    // web design
    let pop5: PopUpImage = new PopUpImage();
    let pop6: PopUpImage = new PopUpImage();
    let pop7: PopUpImage = new PopUpImage();
    let pop8: PopUpImage = new PopUpImage();
    let pop9: PopUpImage = new PopUpImage();
    let pop10: PopUpImage = new PopUpImage();
    let pop11: PopUpImage = new PopUpImage();
    let pop12: PopUpImage = new PopUpImage();
    pop5.src = "../../assets/img/web_2_pop.jpg";
    pop6.src = "../../assets/img/fb_4_pop.jpg";
    pop7.src = "../../assets/img/fb_3_pop.jpg";
    pop8.src = "../../assets/img/fb_5_pop.jpg";
    pop9.src = "../../assets/img/web_pop.jpg";
    pop10.src = "../../assets/img/fb_1_pop.jpg";
    pop11.src = "../../assets/img/house_pop.jpg"; //
    pop12.src = "../../assets/img/fb_2_pop.jpg";
    this.mPopUpList.push(pop5, pop6, pop7, pop8, pop9, pop10, pop11, pop12);

    // brands
    let pop13: PopUpImage = new PopUpImage();
    let pop14: PopUpImage = new PopUpImage();
    let pop15: PopUpImage = new PopUpImage();
    let pop16: PopUpImage = new PopUpImage();
    let pop17: PopUpImage = new PopUpImage();
    let pop18: PopUpImage = new PopUpImage();
    let pop19: PopUpImage = new PopUpImage();
    let pop20: PopUpImage = new PopUpImage();
    let pop21: PopUpImage = new PopUpImage();
    let pop22: PopUpImage = new PopUpImage();
    pop13.src = "../../assets/img/logo_5_pop.jpg";
    pop14.src = "../../assets/img/logo_7_pop.jpg";
    pop15.src = "../../assets/img/logo_6_pop.jpg";
    pop16.src = "../../assets/img/logo_8_pop.jpg";
    pop17.src = "../../assets/img/logo_9_pop.jpg";
    pop18.src = "../../assets/img/logo_1_pop.jpg";
    pop19.src = "../../assets/img/logo_2_pop.jpg";
    pop20.src = "../../assets/img/logo_3_pop.jpg";
    pop21.src = "../../assets/img/logo_4_pop.jpg";
    pop22.src = "../../assets/img/logo_10_pop.jpg";
    this.mPopUpList.push(pop13, pop14, pop15, pop16, pop17, pop18, pop19, pop20, pop21, pop22);

    // motion graphics
    let pop23: PopUpImage = new PopUpImage();
    let pop24: PopUpImage = new PopUpImage();
    let pop25: PopUpImage = new PopUpImage();
    let pop26: PopUpImage = new PopUpImage();
    let pop27: PopUpImage = new PopUpImage();
    pop23.isVideo = true;
    pop24.isVideo = true;
    pop25.isVideo = true;
    pop26.isVideo = true;
    pop27.isVideo = true;
    pop23.src = "../../assets/img/iron_2.mp4";
    pop24.src = "../../assets/img/promotion_video.mp4";
    pop25.src = "../../assets/img/coupon_video.mp4";
    pop26.src = "../../assets/img/yesoryes_video.mp4";
    pop27.src = "../../assets/img/Main_2.mp4";
    this.mPopUpList.push(pop23, pop24, pop25, pop26, pop27);
  }

  onPortfolioMenuClick(item: Portfolio) {
    this.mPortfolioList.forEach(item => item.active = false);
    item.active = true;

  }

  sliderPrevClick() {
    if (this.mPortfolioList[0].active) {
      document.getElementById('gdSection').style.transform = "translateX(0)";
    }
    if (this.mPortfolioList[2].active) {
      document.getElementById('wdSection').style.transform = "translateX(0)";
    }
    if (this.mPortfolioList[4].active) {
      document.getElementById('brandingSection').style.transform = "translateX(0)";
    }
  }

  sliderNextClick() {
    if (this.mPortfolioList[0].active) {
      document.getElementById('gdSection').style.transform = "translateX(calc(-100% - 23px))";
    }
    if (this.mPortfolioList[2].active) {
      document.getElementById('wdSection').style.transform = "translateX(calc(-100% - 23px))";
    }
    if (this.mPortfolioList[4].active) {
      document.getElementById('brandingSection').style.transform = "translateX(calc(-100% - 23px))";
    }
  }

  showPopUp(popup: PopUpImage) {
    this.mShowPopUp = true;
    this.mPopUpList.forEach(item => {
        item.active = false;
    });
    popup.active = true;
  }

  closePopUp() {
    this.mShowPopUp = false;
    this.mPopUpList.forEach(item => item.active = false);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.closePopUp();
  }

}
