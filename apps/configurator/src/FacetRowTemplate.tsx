import type { ObjectFieldTemplateProps } from '@rjsf/utils';
import type { FacetConfig } from '@valeros/config-schema';
import { clsx } from 'clsx';

const facetFieldOrder = ['name', 'label', 'icon', 'hidden'];

export function FacetRowTemplate({
  properties,
  formData: facetConfig,
}: ObjectFieldTemplateProps<FacetConfig>) {
  const hidden = Boolean(facetConfig?.hidden);

  return (
    <div className={clsx('flex items-center gap-3', hidden && 'opacity-40')}>
      {facetFieldOrder.map((name) => {
        const prop = properties.find((p) => p.name === name);
        return prop ? (
          <div key={name} className="flex-1">
            {prop.content}
          </div>
        ) : null;
      })}
    </div>
  );
}
