import React from "react";
import { withTranslation } from "../../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";

import { SSiderLeft, SSidertitle, } from "../style";

type Props = {
  t: TFunction;
};

const SiderLeft: NextPage<Props, any> = ({ t }) => {
  const alist = [
    {
      imgURL: "https://static.apiseven.com/202108/book.svg",
      name: "Developer Docs",
      path: "",
    },
    {
      imgURL: "https://static.apiseven.com/202108/guide.svg",
      name: "User Guide",
      path: "",
    },
    {
      imgURL: "https://static.apiseven.com/202108/academy.svg",
      name: "API7 Academy",
      path: "",
    },
    {
      imgURL: "https://static.apiseven.com/202108/blog.svg",
      name: "Blog",
      path: "",
    },
    {
      imgURL: "https://static.apiseven.com/202108/starters.svg",
      name: "Starters",
      path: "",
    },
    {
      imgURL: "https://static.apiseven.com/202108/tutorials.svg",
      name: "Tutorials",
      path: "",
    },
    {
      imgURL: "https://static.apiseven.com/202108/recipes.svg",
      name: "Video Library",
      path: "",
    },
  ]
  const contentlist = [
    {
      title: "DEVELOPER DOCUMENTATION",
      text: [
        { title: "Getting Started", path: "" },
        { title: "Setup & Deployment", path: "" },
        { title: "Development", path: "" },
        { title: "Update & Migration", path: "" },
        { title: "Developer Resources", path: "" },
        { title: "Guides", path: "" }
      ]
    },
    {
      title: "USER GUIDE",
      text: [
        { title: "Getting Started", path: "" },
        { title: "Content Manager", path: "" },
        { title: "Content-Type Builder", path: "" },
        { title: "Users, Roles & Permissions", path: "" },
        { title: "Plugins", path: "" },
        { title: "General Settings", path: "" }
      ]
    },
    {
      title: "RESOURCES",
      text: [
        { title: "Newsroom", path: "" },
        { title: "Support", path: "" },
        { title: "Press Kit", path: "" },
        { title: "Guide to Headless CMS", path: "" }
      ]
    }
  ]
  return (
    <SSiderLeft>
      <div>
        {alist.map((item) => (
          <a key={item.name} target="_blank" href={item.path}>
            <img src={item.imgURL} />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
      <div>
        {contentlist.map((item) => (
          <SSidertitle key={item.title}>
            <h2>
              {item.title}
            </h2>
            {item.text.map((it) => (
              <a href={it.path} target="_blank" key={it.title}>{it.title}</a>
            ))}
          </SSidertitle>
        ))}
      </div>
    </SSiderLeft>
  )
}

export default withTranslation("siderLeft")(SiderLeft);
