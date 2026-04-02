import { useEffect } from 'react';
import user1 from '../assets/images/user/1.jpg';
import user2 from '../assets/images/user/2.jpg';
import user3 from '../assets/images/user/3.jpg';
import user5 from '../assets/images/user/5.jpg';

export default function TrustBrandsSection() {
  useEffect(() => {
    if (window.$ && window.$.fn.slick) {
      const $carousel = $('.slider3');
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
        });
      }
    }
  }, []);

  return (
    <section>
      <div className="hom-cus-revi">
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <p>trusted brand</p>
              <h2>
                <span>
                  Trust by <b className="num">1500</b>+ Couples
                </span>
              </h2>
              <span className="leaf1" />
              <span className="tit-ani-" />
            </div>
            <div className="slid-inn cus-revi">
              <ul className="slider3 slick-carousel">
                <li>
                  <div className="cus-revi-box">
                    <div className="revi-im">
                      <img src={user1} alt="" loading="lazy" />
                      <i className="cir-com cir-1" />
                      <i className="cir-com cir-2" />
                      <i className="cir-com cir-3" />
                    </div>
                    <p>
                      "Finding my life partner seemed impossible until I joined AgapeVows. The matches were incredibly accurate, and we instantly connected. We're now happily married for two years!"
                    </p>
                    <h5>Michael & Sarah</h5>
                    <span>London</span>
                  </div>
                </li>
                <li>
                  <div className="cus-revi-box">
                    <div className="revi-im">
                      <img src={user2} alt="" loading="lazy" />
                      <i className="cir-com cir-1" />
                      <i className="cir-com cir-2" />
                      <i className="cir-com cir-3" />
                    </div>
                    <p>
                      "We met on this platform and it was love at first sight. The secure verified profiles gave me the confidence to reach out. Thank you for making our dream wedding possible."
                    </p>
                    <h5>David & Emily</h5>
                    <span>New York</span>
                  </div>
                </li>
                <li>
                  <div className="cus-revi-box">
                    <div className="revi-im">
                      <img src={user3} alt="" loading="lazy" />
                      <i className="cir-com cir-1" />
                      <i className="cir-com cir-2" />
                      <i className="cir-com cir-3" />
                    </div>
                    <p>
                      "AgapeVows made the journey of finding true love so seamless and safe. The premium features helped us filter through and find exactly who we were looking for."
                    </p>
                    <h5>James & Jessica</h5>
                    <span>Sydney</span>
                  </div>
                </li>
                <li>
                  <div className="cus-revi-box">
                    <div className="revi-im">
                      <img src={user5} alt="" loading="lazy" />
                      <i className="cir-com cir-1" />
                      <i className="cir-com cir-2" />
                      <i className="cir-com cir-3" />
                    </div>
                    <p>
                      "I was skeptical about finding marriage online, but this platform proved me wrong. We highly recommend AgapeVows to anyone genuinely looking for a lifelong relationship."
                    </p>
                    <h5>Robert & Olivia</h5>
                    <span>Toronto</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="cta-full-wid">
              <a href="#!" className="cta-dark">
                More customer reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
