/**
 * MIT License
 *
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { PromptAction } from '@ohos.arkui.UIContext';
import { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';

declare enum Alignment {
  TopStart,
  Top,
  TopEnd,
  Start,
  Center,
  End,
  BottomStart,
  Bottom,
  BottomEnd
};

export class ToastModule extends TurboModule {
  constructor(ctx: TurboModuleContext) {
    super(ctx);
  }

  mostRecentToast = new PromptAction();

  show(options: Map<string, string>) {
    var message = "this is a toast";
    var position = "bottom";
    var duration = "short";
    var addPixelsY = 0;
    if (options) {
      if (options['message']) {
        message = options['message'];
      }
      if (options['position']) {
        position = options['position'];
      }
      if (options['duration']) {
        duration = options['duration'];
      }
      if (options['addPixelsY']) {
        addPixelsY = options['addPixelsY'];
      }
    }
    let alignPost = Alignment.Bottom;
    if (position === "top") {
      alignPost = Alignment.Top;
      addPixelsY += 20;
    } else if (position === "center") {
      alignPost = Alignment.Center;
    } else if (position === "bottom") {
      addPixelsY -= 20;
    }
    const durationValue = duration === "short" ? 2000 : 5000;
    const promptAction = new PromptAction();
    promptAction.showToast({
      message: message,
      duration: durationValue,
      alignment: alignPost,
      offset: { dx: 0, dy: addPixelsY }
    });
    this.mostRecentToast = promptAction;
  }

  hide() {
  }
}

