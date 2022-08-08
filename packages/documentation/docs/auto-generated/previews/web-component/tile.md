<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/tile.html -->
```html
<cw-tile size="small">92.8 °C</cw-tile>

<cw-tile size="medium" class="mr-1">
  <div slot="header">Tile header</div>
  <div class="text-l">92.8 °C</div>
</cw-tile>

<cw-tile size="big">
  <div
    class="d-flex flex-grow-1 align-items-center justify-content-between"
    slot="header"
  >
    Tile header
    <cw-icon-button ghost icon="context-menu"></cw-icon-button>
  </div>
  <div slot="subheader">Temperature</div>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: flex-end;
      justify-content: space-between;
    "
  >
    <span>92.8 °C</span>
  </div>
  <div
    class="d-flex h-100 align-items-center justify-content-end"
    slot="footer"
  >
    <cw-button ghost slot="footer">
      <cw-icon name="chevron-right-small"></cw-icon>Details
    </cw-button>
  </div>
</cw-tile>
```