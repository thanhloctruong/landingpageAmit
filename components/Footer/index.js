import React from "react";
import Link from "next/link";
import {
  InstagramOutlined,
  TwitterOutlined,
  GithubOutlined,
  GlobalOutlined,
  AppleOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="flex justify-between px-32">
      <div className="footer__left flex">
         <div className="footer__logo text-xl font-bold">
          <Link href="/">
            <a>tails.</a>
          </Link>
        </div>
        <span className="font-thin mx-4"> | </span>
        <p className="font-thin">
          &copy; <span>2021 AMIT Assessmant - AMIT JSC</span>
        </p>
      </div>
      <div className="footer__right">
        <div className="footer__social flex">
          <div className="facebook mx-2">
            <a>
              <AppleOutlined />
            </a>
          </div>
          <div className="instagram mx-2">
            <Link href="https://www.instagram/">
              <a>
                <InstagramOutlined />
              </a>
            </Link>
          </div>
          <div className="twiter mx-2">
            <Link href="https://www.instagram/">
              <a>
                <TwitterOutlined />
              </a>
            </Link>
          </div>
          <div className="github mx-2">
            <Link href="https://www.instagram/">
              <a>
                <GithubOutlined />
              </a>
            </Link>
          </div>
          <div className="website mx-2">
            <Link href="https://www.instagram/">
              <a>
                <GlobalOutlined />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
