import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderHeader = html.node`<div>
  <div class='avatar-container'>
    <img src='${settings.avatarImage}' class='avatar' alt='${settings.name}' />
  </div>
  <h1>${settings.name}</h1>
   <h2>
<i> drag prince of falling stars <br> ⋆ they/them ⋆  </h2>
<h5> <br> shapeshifting; stunts; <br> dance; & silly guy shenanigans <br><br>
i make music mixes, take photos <br> & do design work as well
</h5> </i>
</div>`;
