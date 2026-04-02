import iconRings from '../assets/images/icon/rings.png';
import iconWedding2 from '../assets/images/icon/wedding-2.png';
import iconLoveBirds from '../assets/images/icon/love-birds.png';
import iconNetwork from '../assets/images/icon/network.png';
import iconChat from '../assets/images/icon/chat.png';
import iconWeddingCouple from '../assets/images/icon/wedding-couple.png';

export default function HowItWorksSection() {
  return (
    <section>
      <div className="wedd-tline">
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <p>Moments</p>
              <h2>
                <span>How it works</span>
              </h2>
              <span className="leaf1" />
              <span className="tit-ani-" />
            </div>
            <div className="inn">
              <ul>
                <li>
                  <div className="tline-inn">
                    <div className="tline-im animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <img src={iconRings} alt="" loading="lazy" />
                    </div>
                    <div className="tline-con animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <h5>Register</h5>

                      <p>
                        Create your profile in minutes. Add your photos, interests, and preferences to start your journey towards finding the perfect life partner.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tline-inn tline-inn-reve">
                    <div className="tline-con animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <h5>Find your Match</h5>

                      <p>
                        Browse through thousands of verified profiles. Use our advanced filters to find someone who shares your values, culture, and lifestyle.
                      </p>
                    </div>
                    <div className="tline-im animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <img src={iconWedding2} alt="" loading="lazy" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tline-inn">
                    <div className="tline-im animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <img src={iconLoveBirds} alt="" loading="lazy" />
                    </div>
                    <div className="tline-con animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <h5>Send Interest</h5>

                      <p>
                        Found someone interesting? Express your interest with a single click. It's the first step towards a meaningful conversation and a lasting bond.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tline-inn tline-inn-reve">
                    <div className="tline-con animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <h5>Get Profile Information</h5>

                      <p>
                        Get to know them better. Explore detailed profile information, professional backgrounds, and family details to ensure a perfect compatibility.
                      </p>
                    </div>
                    <div className="tline-im animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <img src={iconNetwork} alt="" loading="lazy" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tline-inn">
                    <div className="tline-im animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <img src={iconChat} alt="" loading="lazy" />
                    </div>
                    <div className="tline-con animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <h5>Start Meetups</h5>

                      <p>
                        Connect securely through our platform. Start chatting and arrange meetups to build understanding and strengthen your connection.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tline-inn tline-inn-reve">
                    <div className="tline-con animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <h5>Getting Marriage</h5>

                      <p>
                        Turn your beautiful journey into a lifetime of happiness. We celebrate every successful match and the beginning of a new family legacy.
                      </p>
                    </div>
                    <div className="tline-im animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <img src={iconWeddingCouple} alt="" loading="lazy" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
