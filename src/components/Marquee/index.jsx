import React from "react";
import { MarqueeUi } from "./styles";

const Marquee = props => <MarqueeUi {...props}>{props.children}</MarqueeUi>;

export default Marquee;
