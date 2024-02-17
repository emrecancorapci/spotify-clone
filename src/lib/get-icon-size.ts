interface IconSize {
  size: number;
  strokeWidth: number;
}

export default function getIconSize(size: 's' | 'm' | 'l' = 'm', thin?: boolean): IconSize {
  switch (size) {
    case 's': {
      return { size: 14, strokeWidth: thin ? 2 : 2.5 };
    }
    case 'm': {
      return { size: 18, strokeWidth: thin ? 2 : 2.5 };
    }
    case 'l': {
      return { size: 26, strokeWidth: thin ? 2 : 2.5 };
    }
  }
}
