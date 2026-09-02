import { Widget } from '../../../widgets/core/types/node-presentation-config';
import { ImageGalleryWidgetOptions } from '../../../widgets/generic/image-gallery-widget/image-gallery-widget.options';
import { LinkWidgetOptions } from '../../../widgets/generic/link-widget/link-widget.options';
import { MediaWidgetOptions } from '../../../widgets/generic/media-widget/media-widget.options';
import { TextWidgetOptions } from '../../../widgets/generic/text-widget/text-widget.options';

export const nameWidget: Widget = {
  id: 'name',
  properties: ['name'],
  componentId: 'link-widget',
  options: {
    showPropertyLabel: false,
    asH2: true,
    bold: true,
  } as TextWidgetOptions,
};

export const textWidget: Widget = {
  id: 'text',
  properties: ['text'],
  componentId: 'text-widget',
  options: {
    propertyLabel: 'Tekst',
    icon: 'file-text',
  } as TextWidgetOptions,
};

export const typeWidget: Widget = {
  id: 'type',
  properties: ['type'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Soort',
    icon: 'grid',
  },
};

export const additionalTypeWidget: Widget = {
  id: 'additional-type',
  properties: ['additionalType'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Soort',
    icon: 'grid',
  },
};

export const datasetWidget: Widget = {
  id: 'dataset',
  properties: ['dataset'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Collectie',
    icon: 'archive',
  },
};

export const imageThumbWidget: Widget = {
  id: 'image-thumb',
  properties: ['associatedMedia'],
  componentId: 'image-gallery-widget',
  options: {
    showPropertyLabel: false,
    position: 'top',
    maxThumbnails: 1,
    enableLightbox: false,
    noPadding: true,
  } as ImageGalleryWidgetOptions,
};

export const descriptionWithoutLabelWidget: Widget = {
  id: 'description-without-label',
  properties: ['description'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Beschrijving',
    showPropertyLabel: false,
    maxLength: 200,
  } as TextWidgetOptions,
};

export const descriptionHeaderWidget: Widget = {
  id: 'description-header',
  properties: ['description'],
  componentId: 'link-widget',
  options: {
    showPropertyLabel: false,
    largeFont: true,
  } as TextWidgetOptions,
};

export const licenseWidget: Widget = {
  id: 'license',
  properties: ['license'],
  componentId: 'literal-link-widget',
  options: {
    propertyLabel: 'Licentie',
    icon: 'file-text',
    isExternal: true,
  },
};

export const publisherWidget: Widget = {
  id: 'publisher',
  properties: ['publisher'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Uitgever',
    icon: 'users',
  },
};

export const hasOccupationWidget: Widget = {
  id: 'has-occupation',
  properties: ['hasOccupation'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Beroep',
    icon: 'briefcase',
  },
};

export const genreWidget: Widget = {
  id: 'genre',
  properties: ['genre'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Genre',
    icon: 'tag',
  },
};

export const aboutWidget: Widget = {
  id: 'about',
  properties: ['about'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Over',
    icon: 'info',
  },
};

export const locationWidget: Widget = {
  id: 'location',
  properties: ['location', 'contentLocation', 'locationCreated'],
  componentId: 'map-widget',
  options: {
    propertyLabel: 'Locatie',
    icon: 'map-pin',
    showOriginalLink: true,
  },
};

export const birthPlaceWidget: Widget = {
  id: 'birth-place',
  properties: ['birthPlace'],
  componentId: 'map-widget',
  options: {
    propertyLabel: 'Geboorteplaats',
    icon: 'map-pin',
    showOriginalLink: true,
  },
};

export const deathPlaceWidget: Widget = {
  id: 'death-place',
  properties: ['deathPlace'],
  componentId: 'map-widget',
  options: {
    propertyLabel: 'Plaats van overlijden',
    icon: 'map-pin',
    showOriginalLink: true,
  },
};

export const mediaWidget: Widget = {
  id: 'media',
  properties: ['iiifManifest'],
  componentId: 'media-widget',
  options: {
    showPropertyLabel: false,
    position: 'left',
    iiifViewer: 'tify',
  } as MediaWidgetOptions,
};

export const materialWidget: Widget = {
  id: 'material',
  properties: ['material'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Materiaal',
    icon: 'package',
  },
};

export const creatorWidget: Widget = {
  id: 'creator',
  properties: ['creator'],
  componentId: 'creator-widget',
  options: {
    propertyLabel: 'Vervaardiger',
    icon: 'user',
  },
};

export const dateCreatedWidget: Widget = {
  id: 'date-created',
  properties: ['dateCreated'],
  componentId: 'date-widget',
  options: {
    propertyLabel: 'Vervaardigingsdatum',
    icon: 'calendar',
  },
};

export const birthDateWidget: Widget = {
  id: 'birth-date',
  properties: ['birthDate'],
  componentId: 'date-widget',
  options: {
    propertyLabel: 'Geboortedatum',
    icon: 'calendar',
  },
};

export const deathDateWidget: Widget = {
  id: 'death-date',
  properties: ['deathDate'],
  componentId: 'date-widget',
  options: {
    propertyLabel: 'Overlijdensdatum',
    icon: 'calendar',
  },
};

export const geoWidget: Widget = {
  id: 'geo',
  properties: ['geo'],
  componentId: 'map-widget',
  options: {},
};

export const addressWidget: Widget = {
  id: 'address',
  properties: ['address'],
  componentId: 'address-widget',
  options: {
    propertyLabel: 'Adres',
    icon: 'home',
  },
};

export const isBasedOnWidget: Widget = {
  id: 'is-based-on',
  properties: ['isBasedOn'],
  componentId: 'link-widget',
  options: {
    propertyLabel: 'Gebaseerd op',
    icon: 'external-link',
  },
};

export const referringNodesWidget: Widget = {
  id: 'referring-nodes',
  properties: ['id'],
  componentId: 'referring-nodes-widget',
  options: {
    propertyLabel: 'Verwijzende objecten',
    icon: 'link',
  },
};

export const imageThumbLeftWidget: Widget = {
  id: 'image-thumb-left',
  properties: ['associatedMedia'],
  componentId: 'image-gallery-widget',
  options: {
    showPropertyLabel: false,
    position: 'left',
    maxThumbnails: 1,
    enableLightbox: false,
    noPadding: true,
  } as ImageGalleryWidgetOptions,
};

export const sizeWidget: Widget = {
  id: 'size',
  componentId: 'text-widget',
  properties: ['size'],
  options: {
    propertyLabel: 'Grootte',
    icon: 'maximize',
  },
};

export const idAsLinkWidget: Widget = {
  id: 'idAsLink',
  componentId: 'literal-link-widget',
  properties: ['id'],
  options: {
    propertyLabel: 'Gebaseerd op',
    icon: 'external-link',
    isExternal: true,
  } as LinkWidgetOptions,
};

export const separatorWidget: Widget = {
  id: 'separator',
  componentId: 'separator-widget',
  options: {
    showPropertyLabel: false,
  },
};

export const fallbackWidget: Widget = {
  id: 'fallback',
  componentId: 'json-widget',
  isFallback: true,
};
