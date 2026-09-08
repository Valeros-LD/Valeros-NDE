import type { ObjectFieldTemplateProps } from '@rjsf/utils';
import type { NodePresentationConfig } from '@valeros/config-schema';

import { Collapse } from './Collapse';

export function PresentationConfigTemplate({
  properties,
}: ObjectFieldTemplateProps<NodePresentationConfig>) {
  const widgets = properties.find((p) => p.name === 'widgets');
  const rest = properties.filter((p) => p.name !== 'widgets');

  return (
    <div>
      {widgets && <Collapse title="Widgets">{widgets.content}</Collapse>}
      {rest.map((p) => (
        <div key={p.name}>{p.content}</div>
      ))}
    </div>
  );
}
