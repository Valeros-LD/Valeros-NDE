# View Configurations

Views define how search results are displayed to users. Valeros supports multiple view types for different use cases.

## Available View Types

Valeros supports the following built-in view types:

- `'list'` - List view with thumbnails and metadata
- `'grid'` - Grid/masonry view for image-heavy collections
- `'map'` - Map view for geographic exploration

Use one of these types to get started or [create a custom view](/guide/custom-views).

## Configuration

Views are configured in:

```
src/app/features/search/config/views.config.ts
```

### Example Configuration

```typescript
export const SEARCH_VIEWS_CONFIG: ViewsSettings = {
  mappings: [
    {
      type: 'list',
      component: ListViewComponent, // Extends BaseResultsView
      config: {
        pageSize: 20,
        showPagination: true,
        showResultsCount: true,
      },
      icon: featherList,
      label: 'Lijst weergave',
      widgetsSettings: LIST_VIEW_WIDGETS_SETTINGS,
    },
    {
      type: 'grid',
      // ...
    },
    {
      type: 'map',
      // ...
    },
  ],
  defaultView: 'list',
};
```

## View-Specific Widget Configurations

Each view can have its own [widget configuration](/guide/widget-system). For example, a **List View** might show thumbnails on the left with title and description, while a **Grid View** shows only images in a masonry layout.

### Example configuration

```typescript
// List view shows thumbnails on the left with title and description
const LIST_VIEW_WIDGETS: WidgetsSettings = {
  ...BASE_WIDGETS_SETTINGS,
  widgetOrder: [
    {
      widgetIds: ['image-thumb-left', 'name', 'description'],
    },
  ],
};

// Grid view shows only images in a masonry layout
const GRID_VIEW_WIDGETS: WidgetsSettings = {
  ...BASE_WIDGETS_SETTINGS,
  widgetOrder: [
    {
      widgetIds: ['image-thumb'],
    },
  ],
};

export const SEARCH_VIEWS_CONFIG: ViewsSettings = {
  mappings: [
    {
      type: 'list',
      component: ListViewComponent,
      widgetsSettings: LIST_VIEW_WIDGETS,
      // ...
    },
    {
      type: 'grid',
      component: MasonryViewComponent,
      widgetsSettings: GRID_VIEW_WIDGETS,
      // ...
    },
  ],
};
```

## Switching Views

::: warning TODO
Add screenshot here
:::

Users can switch between views using the view switcher component in the search interface.

## Next Steps

- Learn to create [custom views](/guide/custom-views)
- Explore [built-in widgets](/guide/built-in-widgets)
- Understand the [widget system](/guide/widget-system)
