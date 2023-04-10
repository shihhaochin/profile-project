import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import phoneImg from "../img/phone-call.png";
import emailImg from "../img/email.png";
import githubImg from "../img/github.png";

const contactmepage = ({
  setIsHomepage,
  setIsAboutpage,
  setIsSkillpage,
  setIsPortfoliopage,
  setIsContactpage,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setIsHomepage(false);
    setIsAboutpage(false);
    setIsSkillpage(false);
    setIsPortfoliopage(false);
    setIsContactpage(true);
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_03ly56n",
        "template_7kn8j0v",
        form.current,
        "rhQRhccpGOhyIsO3V"
      )
      .then((result) => {
        console.log(result.text);
        window.alert("已經傳訊息給網站作者");
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className="contactme-bg">
      <div className="contactme-title">
        <h1>如果有任何疑問</h1>
        <p>歡迎隨時與我聯絡</p>
        <div className="contact-card-box">
          <div className="contact-card ">
            <img src={phoneImg} alt="phoneImg" />
            <h3>聯絡電話</h3>
            <p>0916952516</p>
          </div>
          <div className="contact-card ">
            <img src={emailImg} alt="email-img" />
            <h3>電子郵件</h3>
            <p>shihhao108@gmail.com</p>
          </div>
          <div className="contact-card ">
            <img src={githubImg} alt="github-img" />
            <h3>Github</h3>
            <p>https://github.com/shihhaochin</p>
          </div>
        </div>
      </div>

      <div className="contactUsbg">
        <section className="contactUsContainer">
          <div className="contactUs">
            <p>Contact Me</p>

            <form action="" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea name="message" placeholder="Message!"></textarea>
              <button type="submit">
                Send Message <span></span>
              </button>
            </form>
          </div>
        </section>
      </div>

      <div className="meteor-box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default contactmepage;
