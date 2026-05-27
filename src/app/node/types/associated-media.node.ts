import { ImageModel } from '../../ui/image/types/image.model';
import { normalizeToFirst } from '../../data-utils/value-normalization.util';
import { NodeModel } from './node.model';

export type AssociatedMediaNode = NodeModel & {
  contentUrl?: string;
  thumbnailUrl?: string;
  encodingFormat?: string;
  isBasedOn?: {
    id?: string;
    encodingFormat?: string;
  };
};

export function getIiifInfoJsonUrl(
  media: AssociatedMediaNode,
): string | undefined {
  return media.isBasedOn?.id ? `${media.isBasedOn.id}/info.json` : undefined;
}

export function toImageModel(media: AssociatedMediaNode): ImageModel {
  return {
    src: media.contentUrl || media.thumbnailUrl || '',
    thumbnail: media.thumbnailUrl || media.contentUrl || '',
    alt: normalizeToFirst<string>(media.name) || media.id || 'Image',
    iiifInfoUrl: getIiifInfoJsonUrl(media),
  };
}

export function isIIIFPresentationManifest(
  media: AssociatedMediaNode,
): boolean {
  // TODO: Find more robust way to check if the value is a IIIF manifest or not
  const encodingFormat = media.encodingFormat;
  return (
    typeof encodingFormat === 'string' &&
    encodingFormat.includes('iiif.io/api/presentation')
  );
}

export function hasIIIFPresentationManifest(
  mediaNodes: AssociatedMediaNode[],
): boolean {
  return mediaNodes.some(isIIIFPresentationManifest);
}
