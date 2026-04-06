import { useEffect } from 'react';
import couple3 from '../assets/images/couples/3.jpg';
import couple4 from '../assets/images/couples/4.jpg';
import couple5 from '../assets/images/couples/5.jpg';
import couple6 from '../assets/images/couples/6.jpg';
import couple7 from '../assets/images/couples/7.jpg';
import couple8 from '../assets/images/couples/8.jpg';
import couple9 from '../assets/images/couples/9.jpg';
import couple10 from '../assets/images/couples/10.jpg';

export default function RecentCouplesSection() {
  useEffect(() => {
    if (window.$ && window.$.fn.slick) {
      const $carousel = $('.couple-sli');
      if ($carousel.length && !$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          autoplay: false,
          infinite: false,
          speed: 500,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
        });
      }
    }
  }, []);

  return (
    <section>
      <div className="hom-couples-all">
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <p>trusted brand</p>
              <h2>
                <span>Recent Couples</span>
              </h2>
              <span className="leaf1" />
              <span className="tit-ani-" />
            </div>
          </div>
        </div>
        <div className="hom-coup-test">
          <ul className="couple-sli slick-carousel">
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple6} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="wedding-video.html" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple7} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="wedding-video.html" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple8} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="wedding-video.html" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple9} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="wedding-video.html" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple10} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="wedding-video.html" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple3} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="wedding-video.html" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple4} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="wedding-video.html" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="hom-coup-box">
                <span className="leaf" />
                <img src={couple5} alt="" loading="lazy" />
                <div className="bx">
                  <h4>
                    Dany &amp; July <span>New York</span>
                  </h4>
                  <a href="wedding.html" className="sml-cta cta-dark">
                    View more
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
