# Krystall & Bahl (Interactive Development Assignment 1)

This website is for the fictitious company “Krystall & Bahl”, a company that provides a range of services from web development to graphic design.  
The website details an overview of the company, as well as the company’s works and contact information, for potential clients to view.

- [Design Rationale](#design-rationale)
- [Features](#features)
- [Credits](#credits)
  - [Media](#media)
  - [Externally Sourced/Generated Code](#externally-sourcedgenerated-code)
  - [External Technologies Used](#external-technologies-used)
  - [Fonts](#fonts)
- [Licence](#licence)

## Design Rationale

As the website is for a fictitious design firm, the website is designed to be visually appealing and unique, while still being functional and easy to use.

The hero section is composed of overlapping elements, with an SVG logo and a rotating radial text behind it. In front of all of this is the agency’s name.  
This differs from the proposed grid-like layout of elements in the wireframe due to the scrapping of the idea due to complexity and time constraints.

The about section stars the photos of the agency’s “founders”, with a short description of the agency.  
The photos are styled as polaroids, and are positioned to look as if they were “scattered” onto the webpage.

The works section is short and sweet while giving clients enough images to know the agency’s style and competency quickly.

The contact section is a simple contact card with a mouse-aware tilt effect, which can be clicked on to redirect to the users’ email client.  
This was chosen over a contact form not due to complexity, but contact forms being outdated and not as user-friendly as a simple email link.

All design choices were made to align with the agency’s fictitious brand of being “human-first”, a la user-first and user-friendly.

Prototype: [`src/wireframe.xd`](src/wireframe.xd)

## Features

- Sticky Universal Navigation Menu  
  This allows the user to navigate the website easily at any point in the page.

- Fully Responsive to Breakpoints Until ~350px  
  This supports the majority of mobile devices, including the iPhone SE.

- Smooth Scrolling  
  This provides a smooth scrolling experience for clients.

- Text with Blend Colours  
  This provides a unique visual experience for clients, and allows for text to contrast with the background.

- Mouse-aware Tilt Effect (on Contact Card)  
  This provides a unique visual experience for clients interested in contacting the fictitious agency, is fun, and allows for the contact card to stand out interaction-wise.

## Credits

### Media

- Photo of “krystall”

  ```text
  public/assets/webp/krystall.webp
  src/assets/png/krystall.png
  ```

  Features Charlene  
  Provided by Jun Yang  
  Licence: All Rights Reserved

- Photo of “bahl”

  ```text
  public/assets/webp/bahl.webp
  src/assets/png/bahl.png
  ```

  Features Simone  
  Provided by Toby  
  Licence: All Rights Reserved

### Externally Sourced/Generated Code

- css reset

  ```text
  public/assets/css/preflight.css
  ```

  From <https://unpkg.com/tailwindcss@^3/src/css/preflight.css>  
  Licence: [MIT Licence](https://unpkg.com/tailwindcss@^3/src/css/preflight.css)

- Material Design 3 Colour Tokens

  ```text
  public/assets/css/colors.module.css
  public/assets/css/theme.css
  public/assets/css/theme.dark.css
  ```

  From <https://m3.material.io/theme-builder#/custom>  
  Licence: [Same as Repository](#licence)

### External Technologies Used

- Lenis by Studio Freight

  Lenis was included to provide smooth scrolling on the website.

  <https://github.com/studio-freight/lenis>

- vanilla-tilt.js by micku7zu

  vanilla-tilt.js was included to provide the on-hover mouse-aware tilt effect on the contact card.

  <https://github.com/micku7zu/vanilla-tilt.js>

## Fonts

- DT Nightingale by [Celia Yew](https://www.behance.net/celiayewgraphics) under [Death to Typography](https://deathoftypography.com)

  Licence: SIL Open Font Licence v1.1

  ```text
  Copyright © 2021, Death of Typography (DOT) and Original Designer
  This Font Software is licensed under the SIL Open Font License, Version 1.1.
  This license is copied below, and is also available with a FAQ at:
  http://scripts.sil.org/OFL

  -----------------------------------------------------------
  SIL OPEN FONT LICENSE Version 1.1 - 26 February 2021
  -----------------------------------------------------------

  PREAMBLE
  --------

  The goals of the Open Font License (OFL) are to stimulate worldwide
  development of collaborative font projects, to support the font creation
  efforts of academic and linguistic communities, and to provide a free and
  open framework in which fonts may be shared and improved in partnership
  with others.

  The OFL allows the licensed fonts to be used, studied, modified and
  redistributed freely as long as they are not sold by themselves. The
  fonts, including any derivative works, can be bundled, embedded, 
  redistributed and/or sold with any software provided that any reserved
  names are not used by derivative works. The fonts and derivatives,
  however, cannot be released under any other type of license. The
  requirement for fonts to remain under this license does not apply
  to any document created using the fonts or their derivatives.


  DEFINITIONS
  -----------

  "Font Software" refers to the set of files released by the Copyright
  Holder(s) under this license and clearly marked as such. This may
  include source files, build scripts and documentation.

  "Reserved Font Name" refers to any names specified as such after the
  copyright statement(s).

  "Original Version" refers to the collection of Font Software components as
  distributed by the Copyright Holder(s).

  "Modified Version" refers to any derivative made by adding to, deleting,
  or substituting -- in part or in whole -- any of the components of the
  Original Version, by changing formats or by porting the Font Software to a
  new environment.

  "Author" refers to any designer, engineer, programmer, technical
  writer or other person who contributed to the Font Software.


  PERMISSION & CONDITIONS
  -----------------------

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of the Font Software, to use, study, copy, merge, embed, modify,
  redistribute, and sell modified and unmodified copies of the Font
  Software, subject to the following conditions:

  1) Neither the Font Software nor any of its individual components,
  in Original or Modified Versions, may be sold by itself.

  2) Original or Modified Versions of the Font Software may be bundled,
  redistributed and/or sold with any software, provided that each copy
  contains the above copyright notice and this license. These can be
  included either as stand-alone text files, human-readable headers or
  in the appropriate machine-readable metadata fields within text or
  binary files as long as those fields can be easily viewed by the user.

  3) No Modified Version of the Font Software may use the Reserved Font
  Name(s) unless explicit written permission is granted by the corresponding
  Copyright Holder. This restriction only applies to the primary font name as
  presented to the users.

  4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
  Software shall not be used to promote, endorse or advertise any
  Modified Version, except to acknowledge the contribution(s) of the
  Copyright Holder(s) and the Author(s) or with their explicit written
  permission.

  5) The Font Software, modified or unmodified, in part or in whole,
  must be distributed entirely under this license, and must not be
  distributed under any other license. The requirement for fonts to
  remain under this license does not apply to any document created
  using the Font Software.


  TERMINATION
  -----------

  This license becomes null and void if any of the above conditions are
  not met.

  DISCLAIMER
  ----------

  THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
  OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
  COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
  DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
  OTHER DEALINGS IN THE FONT SOFTWARE.
  ```

- BDO Grotesk by [Deni Anggara](https://degarism.com/) and [Fadhl Haqq](https://www.behance.net/akufadhl/appreciated) under [Lokal Container](https://lokalcontainer.com)

  ```text
  public/assets/woff2/bdogrotesk/*
  public/assets/otf/bdogrotesk/*
  ```

  <https://lokalcontainer.com/BDO-Grotesk>

  Licence: SIL Open Font Licence v1.1

  ```text
  This Font Software is licensed under the SIL Open Font License, Version 1.1.
  This license is copied below, and is also available with a FAQ at:
  http://scripts.sil.org/OFL

  SIL Open Font License v1.1
  ====================================================


  Preamble
  ----------

  The goals of the Open Font License (OFL) are to stimulate worldwide
  development of collaborative font projects, to support the font creation
  efforts of academic and linguistic communities, and to provide a free and
  open framework in which fonts may be shared and improved in partnership
  with others.

  The OFL allows the licensed fonts to be used, studied, modified and
  redistributed freely as long as they are not sold by themselves. The
  fonts, including any derivative works, can be bundled, embedded,
  redistributed and/or sold with any software provided that any reserved
  names are not used by derivative works. The fonts and derivatives,
  however, cannot be released under any other type of license. The
  requirement for fonts to remain under this license does not apply
  to any document created using the fonts or their derivatives.


  Definitions
  -------------

  `"Font Software"` refers to the set of files released by the Copyright
  Holder(s) under this license and clearly marked as such. This may
  include source files, build scripts and documentation.

  `"Reserved Font Name"` refers to any names specified as such after the
  copyright statement(s).

  `"Original Version"` refers to the collection of Font Software components as
  distributed by the Copyright Holder(s).

  `"Modified Version"` refers to any derivative made by adding to, deleting,
  or substituting -- in part or in whole -- any of the components of the
  Original Version, by changing formats or by porting the Font Software to a
  new environment.

  `"Author"` refers to any designer, engineer, programmer, technical
  writer or other person who contributed to the Font Software.


  Permission & Conditions
  ------------------------

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of the Font Software, to use, study, copy, merge, embed, modify,
  redistribute, and sell modified and unmodified copies of the Font
  Software, subject to the following conditions:

  1. Neither the Font Software nor any of its individual components,
    in Original or Modified Versions, may be sold by itself.

  2. Original or Modified Versions of the Font Software may be bundled,
    redistributed and/or sold with any software, provided that each copy
    contains the above copyright notice and this license. These can be
    included either as stand-alone text files, human-readable headers or
    in the appropriate machine-readable metadata fields within text or
    binary files as long as those fields can be easily viewed by the user.

  3. No Modified Version of the Font Software may use the Reserved Font
    Name(s) unless explicit written permission is granted by the corresponding
    Copyright Holder. This restriction only applies to the primary font name as
    presented to the users.

  4. The name(s) of the Copyright Holder(s) or the Author(s) of the Font
    Software shall not be used to promote, endorse or advertise any
    Modified Version, except to acknowledge the contribution(s) of the
    Copyright Holder(s) and the Author(s) or with their explicit written
    permission.

  5. The Font Software, modified or unmodified, in part or in whole,
    must be distributed entirely under this license, and must not be
    distributed under any other license. The requirement for fonts to
    remain under this license does not apply to any document created
    using the Font Software.


  Termination
  -----------

  This license becomes null and void if any of the above conditions are
  not met.


      DISCLAIMER

      THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
      OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
      COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
      INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
      DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
      FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
      OTHER DEALINGS IN THE FONT SOFTWARE.
  ```

## Licence

All source code files unless stated otherwise in [Credits](#credits) is free and unencumbered software released into the public domain.  
For more information, please refer to <http://unlicense.org/> or the [UNLICENCE](UNLICENCE) file in the repository root.
