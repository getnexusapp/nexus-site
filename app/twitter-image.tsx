import { ImageResponse } from 'next/og';
import { SocialImageMarkup, socialImageSize } from '@/lib/social-image';

export const runtime = 'edge';
export const alt = 'Nexus — Your Notes. Your Browser. Your AI.';
export const size = socialImageSize;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(<SocialImageMarkup />, { ...size });
}
