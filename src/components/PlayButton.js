import React from "react";
import { Link } from "react-router-dom";

function PlayButton() {
  return (
    <Link className="btn btn-primary" to="/play">
      Play!
    </Link>
  );
}

export default PlayButton;
