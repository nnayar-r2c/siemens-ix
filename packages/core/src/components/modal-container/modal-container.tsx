/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Method } from '@stencil/core';
import { ModalConfig, ModalInstance } from '../modal/modal-utils';
import { TypedEvent } from '../utils/typed-event';

@Component({
  tag: 'ix-modal-container',
  styleUrl: 'modal-container.scss',
  scoped: true,
})
export class ModalContainer {
  @Element() hostElement: HTMLIxModalContainerElement;

  get modalStack() {
    return this.hostElement.querySelector(':scope > div.modal-stack');
  }

  /**
   * Display modal dialog
   *
   * @param config
   */
  @Method()
  async showModal<T = any>(config: ModalConfig<T>): Promise<ModalInstance<T>> {
    const onClose = new TypedEvent<T>();
    const onDismiss = new TypedEvent<T>();

    const modal = document.createElement('ix-modal');
    let { title, content, ...modifiedConfig } = config;
    Object.assign(modal, { headerTitle: title, ...modifiedConfig });

    if (typeof content === 'string') {
      const template = document.createElement('template');
      content = content.trim();
      template.innerHTML = content;
      modal.appendChild(template.content.firstChild);
    } else {
      modal.appendChild(content);
    }
    this.modalStack.appendChild(modal);

    modal.addEventListener('closed', (event: CustomEvent<T>) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.modalStack.removeChild(modal);
      onClose.emit(event.detail);
    });
    modal.addEventListener('dismissed', (event: CustomEvent<T>) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.modalStack.removeChild(modal);
      onDismiss.emit(event.detail);
    });

    return {
      htmlElement: modal,
      onClose,
      onDismiss,
    };
  }

  render() {
    return (
      <Host>
        <div class="modal-stack"></div>
      </Host>
    );
  }
}
