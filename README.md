<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** suryarajendhran, change-css, SuryaRajendhran, suryarajendhran@outlook.com, Change CSS, A library to help modify css in all it's forms easily.
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/suryarajendhran/change-css/Node.js%20CI?style=for-the-badge)
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- TODO: Add a logo -->
  <!-- <a href="https://github.com/suryarajendhran/change-css">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Change CSS</h3>

  <p align="center">
    A library to help find, modify and work with css rules easily.
    <br />
    <a href="https://github.com/suryarajendhran/change-css"><strong>« Explore the docs »</strong></a>
    <br />
    <br />
<!--     <a href="https://github.com/suryarajendhran/change-css">View Demo</a> -->
    ·
    <a href="https://github.com/suryarajendhran/change-css/issues">Report Bug</a>
    ·
    <a href="https://github.com/suryarajendhran/change-css/issues">Request Feature</a>
    ·
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<!-- <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details> -->



<!-- ABOUT THE PROJECT -->
## About The Project

Sometimes, swapping out classes is not enough so you can instead modify the stylesheets themselves. change-css is a library that can help you do just that. This can be a very easy path to theming a dynamic site, especially if the theme variables are generated through JS.
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`suryarajendhran`, `change-css`, `SuryaRajendhran`, `suryarajendhran@outlook.com`, `Change CSS`, `A library to help modify css in all it's forms easily.` -->


<!-- GETTING STARTED -->
## Getting Started

To add the library to your project

### Prerequisites

The library has no dependencies, works with plain old HTML/CSS/JS.

### Installation

1. Install the package from npm

   ```sh
   npm install --save change-css
   ```

2. Also available as a CDN download.



<!-- USAGE EXAMPLES -->
## Usage

### Usage as an ES6 module

#### Get a CSS Rule

Use getCSSRule() to search your document's stylesheets for a [CSS Rule](https://developer.mozilla.org/en-US/docs/Web/API/CSSRule).

```js
import { getCSSRule } from 'change-css';
const CSSRule = getCSSRule('.text-base'); 
// Returns a CSSRule if such a rule exists 
// in any of the stylesheets in your document 
// else returns false.
```

#### Modify a CSS Rule

The modifyCSSRule() function makes it easier to modify a [CSS Rule](https://developer.mozilla.org/en-US/docs/Web/API/CSSRule) with a single function call.

```js
import { modifyCSSRule } from 'change-css';
modifyCSSRule('body', { fontFamily: 'Inter' });
```

### Usage as a CDN script

From version 0.3, Change CSS can now be used in the browser environment. Usage example can be found on [codepen](https://codepen.io/suryarajendhran/pen/mdweBYm).

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/suryarajendhran/change-css/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Surya Rajendhran - [@SuryaRajendhran](https://twitter.com/SuryaRajendhran) - suryarajendhran@outlook.com

Project Link: [https://github.com/suryarajendhran/change-css](https://github.com/suryarajendhran/change-css)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

Thanks to
* This awesome [guide](https://zellwk.com/blog/publish-to-npm/) about publishing to NPM by [Zell Liew](https://github.com/zellwk).




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/suryarajendhran/change-css.svg?style=for-the-badge
[contributors-url]: https://github.com/suryarajendhran/change-css/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/suryarajendhran/change-css.svg?style=for-the-badge
[forks-url]: https://github.com/suryarajendhran/change-css/network/members
[stars-shield]: https://img.shields.io/github/stars/suryarajendhran/change-css.svg?style=for-the-badge
[stars-url]: https://github.com/suryarajendhran/change-css/stargazers
[issues-shield]: https://img.shields.io/github/issues/suryarajendhran/change-css.svg?style=for-the-badge
[issues-url]: https://github.com/suryarajendhran/change-css/issues
[license-shield]: https://img.shields.io/github/license/suryarajendhran/change-css.svg?style=for-the-badge
[license-url]: https://github.com/suryarajendhran/change-css/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/suryarajendhran
