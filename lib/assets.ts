import assetManifest from "@/content/asset-manifest.json";
import framesManifest from "@/content/frames-manifest.json";

type AssetManifest = {
  images?: Record<string, string>;
  videos?: Record<string, string>;
  frames?: Record<string, unknown>;
};

const am = assetManifest as AssetManifest;

/** CDN URL for a generated/Unsplash image slot, or "" if not yet resolved. */
export function imageSlot(slot: string): string {
  return am.images?.[slot] ?? "";
}

/** CDN URL for a generated hero/accent video slot, or "" if not yet resolved. */
export function videoSlot(slot: string): string {
  return am.videos?.[slot] ?? "";
}

export const frames = framesManifest as {
  frameCount: number;
  frameUrlTemplate: string;
  frameDir?: string;
  width?: number;
  height?: number;
};

export const hasFrames = (frames?.frameCount ?? 0) > 0;
