import { h } from 'preact';

import { PreactComponent } from '../component.preact';

export class HeaderComponent extends PreactComponent<unknown, unknown> {
  public render(): preact.JSX.Element {
    return (
      <header class="bg-indigo-900">
        <div className="bg-indigo-100 border-t-2 border-indigo-800">
          <div className="flex items-center">
            <nav className="flex-auto">
              <ul>
                <li className="inline-block">
                  <a href="#responsive-header" className="nav-item">
                    Docs
                  </a>
                </li>
                <li className="inline-block">
                  <a href="#responsive-header" className="nav-item">
                    Examples
                  </a>
                </li>
                <li className="inline-block">
                  <a href="#responsive-header" className="nav-item">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
