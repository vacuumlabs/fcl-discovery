export const NETWORKS = {
  CANARYNET: 'canarynet',
  TESTNET: 'testnet',
  MAINNET: 'mainnet',
}

export const SERVICE_TYPES = {
  AUTHN: 'authn',
}

export const SERVICE_METHODS = {
  EXTENSION: 'EXT/RPC',
}

export const PATHS = {
  MAINNET: '/authn',
  TESTNET: '/testnet/authn',
  CANARYNET: '/canarynet/authn',
}

export const SUPPORTED_VERSIONS = {
  FILTERING: '0.0.78-alpha.10', // Version that supports include in FCL config
  EXTENSIONS: '0.0.79-alpha.0', // Version that supports browser extension redirects
  APP_CONFIG: '0.0.79-alpha.4', // Version that supports displaying your app config
  UNINSTALLED_EXTENSIONS: '1.0.0', // Version that supports uninstalled extensions
  UNINSTALLED_EXTENSIONS_API: '1.2.0', // Version that supports uninstalled extensions on Discovery API
  PLATFORM: '1.0.0', // Version that supports platform
  PLUGIN_SERVICES: '1.2.0', // Version that supports plugin services TODO: up this after development
}

export const COLORS = {
  SECONDARY: '#02419F',
  GREY: '#616161',
  GREY_LIGHTER: '#cecece',
  GREY_LIGHTER_TWO: '#f5f5f5',
  BLACK: '#000000',
  WARNING: '#feefb3',
}

const LOCAL_STORAGE_VERSION = 'v1'

export const LOCAL_STORAGE_KEYS = {
  LAST_INSTALLED: `discovery:${LOCAL_STORAGE_VERSION}:ext:lastUsed`,
}

export const USER_AGENTS_SUBSTRINGS = {
  CHROME: 'Chrome',
}
