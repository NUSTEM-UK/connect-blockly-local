# KniwwelinoBlockly

KniwwelinoBlockly is the visual programming language to program Kniwwelino&reg; micro-controller boards. You can use it online by visiting https://code.kniwwelino.lu or use the offline version provided on https://doku.kniwwelino.lu

## Cloning the repository
Please note that there are submodules in the repository that need initialisation. So, to correctly clone the KniwwelinoBlockly repository:

```
git clone https://github.com/kniwwelino/kniwwelinoblockly.git
cd kniwwelinoblockly
git submodule update --init --recursive
```



## Credit
This project is a derived work of [Ardublockly][16] by carlosperate https://github.com/carlosperate/

Blockly original source is Copyright of Google Inc. [https://developers.google.com/blockly/][1]. A list of changes to the Blockly fork can be found in the [Blockly subdirectory README][17] file.


## License
All derived parts are under the Apache License, Version 2.0. Run `git diff e9781decc3ef6da96b973ffc347948c264aca529...desktop_master` to find out what we changed since we cloned the Ardublockly.

Kniwwelino, the Kniwwelino logo and the Kniwwelino lion are registered trademarks and/or copyrights of the Luxembourg Institute of Science and Technology.

Copyright (c) 2016 carlosperate https://github.com/carlosperate/

Unless stated otherwise, the source code of this projects is
licensed under the Apache License, Version 2.0 (the "License");
you may not use any of the licensed files within this project
except in compliance with the License.

The full document can be found in the [LICENSE][9] file.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


[1]: https://developers.google.com/blockly/
[2]: http://www.arduino.cc/en/main/software/
[3]: TODO.md
[4]: https://github.com/carlosperate/ardublockly/releases/
[5]: https://github.com/carlosperate/ardublockly/wiki/Installing-Ardublockly
[6]: https://github.com/carlosperate/ardublockly/wiki/Configure-Ardublockly
[7]: https://github.com/carlosperate/ardublockly/wiki
[8]: https://github.com/carlosperate/ardublockly/compare/blockly-original...master
[9]: https://github.com/carlosperate/ardublockly/blob/master/LICENSE
[10]: http://ardublockly.embeddedlog.com/demo/index.html
[11]: http://ardublockly.embeddedlog.com/demo/classic/index.html
[12]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=linux/
[13]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=windows/
[14]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=mac/
[15]: http://www.arduino.cc
[16]: https://github.com/BlocklyDuino/BlocklyDuino
[17]: blockly/README.md
[16]: https://github.com/carlosperate/ardublockly

[desktop_screeshot]: http://carlosperate.github.io/ardublockly/images/screenshot_desktop_1.png
[web_screenshot_responsive]: http://carlosperate.github.io/ardublockly/images/screenshot_material_all_small.jpg
[web_screenshot_classic]: http://carlosperate.github.io/ardublockly/images/screenshot_1.png
