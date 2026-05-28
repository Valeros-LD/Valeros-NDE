# Built-in Widgets

::: warning TODO
Document widget-specific settings
:::

Valeros comes with a comprehensive set of built-in widgets for common use cases.

## LinkWidget

Displays clickable links to entities and concepts.

**Example Properties**: `creator`, `publisher`, `about`, `genre`, `material`, `hasOccupation`

```typescript
{
  id: 'creator',
  properties: ['creator'],
  component: LinkWidget,
  config: {
    propertyLabel: 'Creator'
  }
}
```

## MapWidget

Geographic visualization with [Leaflet](https://github.com/Leaflet/Leaflet).

**Example Properties**: `contentLocation`, `location`, `birthPlace`, `deathPlace`, `geo`

```typescript
{
  id: 'location',
  properties: ['contentLocation', 'location'],
  component: MapWidget,
  config: {
    propertyLabel: 'Location'
  }
}
```

## MediaWidget

Orchestrator widget that selects the appropriate media viewer based on available data.

**Example Properties**: `associatedMedia`

```typescript
{
  id: 'media',
  properties: ['associatedMedia'],
  component: MediaWidget,
  config: {
    propertyLabel: 'Media'
  }
}
```

::: warning TODO
Pass preferred IIIF viewer as config to media widget and document it here
:::

**Automatically selects**:

- **TifyIiifWidget** - When IIIF Presentation manifest is available
- **MiradorIiifWidget** - Alternative IIIF viewer (enable in widget component)
- **UniversalviewerIiifWidget** - Alternative IIIF viewer (enable in widget component)
- **ImageGalleryWidget** - When no IIIF manifest is available

## IIIF Widgets

### TifyIiifWidget

[Tify](https://github.com/tify-iiif-viewer/tify)-based IIIF viewer.

### MiradorIiifWidget

[Mirador](https://github.com/ProjectMirador/mirador)-based IIIF viewer.

### UniversalviewerIiifWidget

[UniversalViewer](https://github.com/UniversalViewer/universalviewer)-based IIIF viewer.

## ImageGalleryWidget

Image gallery with zoom and [PhotoSwipe](https://photoswipe.com/) lightbox.

**Used by**: MediaWidget when no IIIF manifest is available

## TextWidget

Simple text display for descriptive content.

**Example Properties**: `description`, `dateCreated`, `birthDate`, `deathDate`

```typescript
{
  id: 'description',
  properties: ['description'],
  component: TextWidget,
  config: {
    propertyLabel: 'Description',
    truncate: true,
    maxLength: 200
  }
}
```

## JsonWidget

Fallback widget for unmapped properties. Displays raw JSON data.

**Used for**: Any property without specific widget mapping

## Domain-Specific Widgets

### AddressWidget

Displays [postal addresses](https://docs.nde.nl/schema-profile/#PostalAddress) in a formatted way.

### DatasetWidget

Shows [dataset](https://docs.nde.nl/schema-profile/#CreativeWork-isPartOf) information as LinkWidget.

::: warning TODO
Add note why this is a domain-specific widget (because it's part of isPartOf and needs a Dataset type filter in the widget)
:::
