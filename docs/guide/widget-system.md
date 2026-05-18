# Widget System

::: warning TODO
Add section on widgets positioning system (top, left, right, etc)
:::

The widget system is the core of Valeros's configuration-driven approach. It allows you to map data properties (`creator`, `date`, `associatedMedia`, ...) to visual components (`LinkWidget`, `TextWidget`, `MediaWidget`, ...) without writing code.

## Basic Configuration

Each widget configuration consists of:

- **id** - Unique identifier for the widget
- **properties** - Array of property names that trigger this widget
- **component** - The Angular component to render
- **config** - Widget-specific configuration options

### Example

::: warning TODO
Add screenshot or screencap here
:::

```typescript
{
  id: 'creator',
  properties: ['creator'],
  component: LinkWidget,
  config: {
    propertyLabel: 'Vervaardiger',
    icon: featherUser
  }
}
```

This configuration:

1. Triggers for an entity's `creator` property
2. Renders the `LinkWidget` component
3. Displays "Vervaardiger" as the label
4. Shows a user icon

## Configuration Locations

### Search Results

Widgets for search result items are configured in:

```
src/app/features/search/config/widgets/
```

::: tip
Widget configurations can be view-specific. Different [view layouts](/guide/view-configurations) (list, grid, map) may display different sets of widgets.
:::

### Detail Pages

Widgets for detail pages are configured in:

```
src/app/features/details/config/widgets.config.ts
```

## Base Configuration Options

::: warning TODO
Add screenshot/screencap examples here
:::

All widgets inherit these base configuration options:

- `showPropertyLabel` - Whether to display the property label

  ```typescript
  showPropertyLabel: true;
  ```

- `propertyLabel` - Display label for the property

  ```typescript
  propertyLabel: 'Vervaardiger';
  ```

- `propertyPath` - Path to the property in the data

  ```typescript
  propertyPath: 'creator.name';
  ```

- `icon` - Icon to display

  ```typescript
  icon: featherUser;
  ```

- `position` - Widget position: `'top'`, `'left'`, `'main'`, `'right'`, or `'bottom'`
  ```typescript
  position: 'left';
  ```

Widget-specific options are documented in the [Built-in Widgets](/guide/built-in-widgets) guide.

## Next Steps

- Explore [built-in widgets](/guide/built-in-widgets)
- Learn to create [custom widgets](/guide/custom-widgets)
- Understand [view configurations](/guide/view-configurations)
