import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import IconEdit from '@theme/Icon/Edit';
import type {Props} from '@theme/EditThisPage';

export default function EditThisPage({editUrl}: Props): ReactNode {
  // Extract file path from GitHub editUrl:
  // https://github.com/AnyChart/docs.anychart.com/edit/develop/docs/basic-charts/line-chart.md
  // → docs/basic-charts/line-chart.md
  const match = editUrl.match(/\/edit\/[^/]+\/(.+)$/);
  const suggestUrl = match ? `/edit?path=${encodeURIComponent(match[1])}` : null;

  if (!suggestUrl) return null;

  return (
    <a href={suggestUrl} className={ThemeClassNames.common.editThisPage}>
      <IconEdit />
      <Translate
        id="theme.common.suggestChanges"
        description="The link label to suggest changes to the current page">
        Suggest Changes
      </Translate>
    </a>
  );
}
