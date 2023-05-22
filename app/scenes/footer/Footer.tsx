"use client";
import Logo from "@/app/components/Logo";
import { FaCopyright } from "react-icons/fa";
import { AiOutlineCaretRight, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { secondFont } from "@/app/font";
import Link from "next/link";
import { links, openHours } from "@/app/data";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import IconButton from "@/app/components/IconButton";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import GroupHeader from "./GroupHeader";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" text-lg w-full flex flex-col items-start justify-center gap-24 bg-black mt-16 pt-16">
      <div className="w-5/6 m-auto flex gap-12 ">
        {/* Logo */}
        <div className="flex-[2] flex flex-col items-start justify-start gap-6">
          <Logo />
          <p className="text-text-color font-medium leading-7 text-justify mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas
            porro deserunt quae reiciendis eveniet velit sunt eum optio,
            incidunt voluptas non aut pariatur in quidem maxime deleniti
            laudantium maiores.
          </p>
          <div className="flex items-center justify-center gap-2">
            <AiOutlinePhone className="text-primary" size={28} />{" "}
            <span className="font-medium text-text-color">+2 123 654 7898</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <GoLocation className="text-primary" size={28} />{" "}
            <span className="font-medium text-text-color">
              24/B Milford Road, New York
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HiOutlineMail className="text-primary" size={28} />{" "}
            <span className="font-medium text-text-color">
              info@example.com
            </span>
          </div>
        </div>
        {/* Quick links */}
        <div className="flex-[1] flex flex-col items-start justify-start gap-8">
          <GroupHeader>Quick Links</GroupHeader>
          {links.slice(1).map(({ name, path }) => (
            <div
              key={`footer-link-${name}`}
              className="flex items-center gap-1 cursor-pointer "
            >
              <AiOutlineCaretRight size={20} className="text-primary" />
              <Link
                href={`#${path}`}
                className="leading-7 text-white/90 font-medium"
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
        {/* Opening Hours */}
        <div className="flex-[1.5]  flex flex-col items-start justify-start gap-10">
          <GroupHeader>Opening Hours</GroupHeader>
          <div className=" w-full flex flex-col gap-6 rounded-md border-[2px] border-stone-700 border-dashed px-4 py-6">
            {openHours.map(({ name, time }) => (
              <div
                key={`open-${name}`}
                className="flex items-center justify-between gap-12 text-lg"
              >
                <span className="font-medium text-text-color">{name}: </span>
                <span className="font-medium text-text-color">{time}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex-[1.5] flex flex-col items-start justify-start gap-8 ">
          <GroupHeader>Newsletter</GroupHeader>
          <p className="text-text-color font-medium text-left leading-7">
            Subscribe Our Newsletter To Get Latest Update And News
          </p>
          <Input placeholder="Your Email" secondary />
          <Button expand>
            <div className="flex items-center justify-center text-center gap-2">
              <HiOutlineMail className="font-semibold" /> Subscribe Now
            </div>
          </Button>
          <div className="flex flex-col gap-4">
            <span
              className={`font-medium text-white text-xl ${secondFont.className}`}
            >
              Follow Us:
            </span>
            <div className="flex items-center justify-start gap-4">
              <IconButton icon={FaFacebookF} secondary size={15} />
              <IconButton icon={FaTwitter} secondary size={15} />
              <IconButton icon={FaLinkedinIn} secondary size={15} />
              <IconButton icon={FaYoutube} secondary size={15} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="
            flex items-center justify-center gap-1
            p-4 w-full text-center border-t-[2px] border-stone-700/60 border-dashed 
            font-medium text-lg text-text-color
        "
      >
        <FaCopyright />
        Copyright 2023 <span className="text-primary">Coffero</span> All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
