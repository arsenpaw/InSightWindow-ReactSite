import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import axIcon from '../../assets/axIcon.png';

export default function FooterComponent() {
  return (
    <Footer container className="bg-black text-white rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src={axIcon}
              alt="Flowbite Logo"
              name="AXProduct"
              className="text-red rounded-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Follow us" className="text-white rounded-none" />
              <Footer.LinkGroup col className="rounded-none">
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="https://discord.gg/KSUEXXgAdY">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white rounded-none" />
              <Footer.LinkGroup col className="rounded-none">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="rounded-none" />
        <div className="w-full sm:flex sm:items-center sm:justify-between rounded-none">
          <Footer.Copyright href="#" by="AXProduct™" year={2024} className="text-white rounded-none" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rounded-none">
            <Footer.Icon href="#" icon={BsFacebook} className="rounded-none" />
            <Footer.Icon href="#" icon={BsInstagram} className="rounded-none" />
            <Footer.Icon href="#" icon={BsTwitter} className="rounded-none" />
            <Footer.Icon href="#" icon={BsGithub} className="rounded-none" />
          </div>
        </div>
      </div>
    </Footer>
  );
}