import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import Button from "@material-ui/core/Button";

import IntlMessages from "@/utils/IntlMessages";
import CustomScrollbars from "@/utils/CustomScrollbars";

class SidenavContent extends Component {

  componentDidMount() {
    const { router } = this.props;
    const that = this;
    const pathname = router.pathname; // get current path

    const menuLi = document.getElementsByClassName("menu");
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function(event) {
        const parentLiEle = that.closest(this, "li");
        if (menuLi[i].classList.contains("menu") && parentLiEle !== null) {
          event.stopPropagation();

          if (menuLi[i].classList.contains("open")) {
            menuLi[i].classList.remove("open", "active");
          } else {
            menuLi[i].classList.add("open", "active");
          }
        } else {
          for (let j = 0; j < menuLi.length; j++) {
            const parentLi = that.closest(this, "li");
            if (
              menuLi[j] !== this &&
              (parentLi === null || !parentLi.classList.contains("open"))
            ) {
              menuLi[j].classList.remove("open");
            } else {
              if (menuLi[j].classList.contains("open")) {
                menuLi[j].classList.remove("open");
              } else {
                menuLi[j].classList.add("open");
              }
            }
          }
        }
      };
    }

    const activeLi = document.querySelector("a[href=\"" + pathname + "\"]"); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("open");
      } else {
        this.closest(activeLi, "li").classList.add("open");
      }
    } catch (error) {
    }
  }

  componentWillReceiveProps(nextProps) {
    const pathname = nextProps.router.pathname; // get current path

    const activeLi = document.querySelector("a[href=\"" + pathname + "\"]"); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("open");
      } else {
        this.closest(activeLi, "li").classList.add("open");
      }
    } catch (error) {
    }
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      [
        "matches",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector"
      ].some(function(fn) {
        if (typeof document.body[fn] === "function") {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {
    }

    return null;
  }

  render() {
    return (
      <CustomScrollbars className=" scrollbar">
        <ul className="nav-menu">

          <li className="nav-header">
            <IntlMessages id="sidebar.main"/>
          </li>

          <li className="menu collapse-box">
            <Button>
              <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"/>
              <span className="nav-text">
                <IntlMessages id="sidebar.dashboard"/>
              </span>
            </Button>
            <ul className="sub-menu">
              <li>
                <Link href="/dashboard/crypto">
                  <a className="prepend-icon">
                    <span className="nav-text"><IntlMessages id="sidebar.dashboard.crypto"/></span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/listing">
                  <a className="prepend-icon">
                    <span className="nav-text"><IntlMessages id="sidebar.dashboard.listing"/></span>
                  </a>
                </Link>
              </li>
            </ul>
          </li>

          <li className="ui_tooltip menu">
            <Button className="void">
              <i className="zmdi zmdi-folder zmdi-hc-fw"/>
              <span className="nav-text"><IntlMessages id="sidebar.management"/></span>
            </Button>

            <ul className="sub-menu">
              <li>
                <Link href="/components/alerts">
                  <a className="prepend-icon">
                    <span className="nav-text"><IntlMessages id="sidebar.management.rooms"/></span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/components/appbar">
                  <a className="prepend-icon">
                    <span className="nav-text"><IntlMessages id="sidebar.management.posts"/></span>
                  </a>
                </Link>
              </li>
            </ul>
          </li>

        </ul>
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);
