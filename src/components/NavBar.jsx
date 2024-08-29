import React from "react";

function NavBar() {

    return (
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Helicopter Logger</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li class="active"><a href="home">Creador de informes</a></li>
        <li><a href="registro">Registro de eventos</a></li>
        <li><a href="checklist">Checklist</a></li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar