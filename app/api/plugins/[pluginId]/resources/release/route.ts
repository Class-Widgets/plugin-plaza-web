// app/api/plugins/[pluginId]/resources/release/route.ts
import { NextResponse } from "next/server";
import { getManifestFromGitHub, parseGitHubRepo } from "@/lib/pluginUtils";
import { pickMirrorFor } from "@/lib/mirrorUtils";

export async function GET(req: Request, ctx: { params: Promise<{ pluginId: string }> }) {
    try {
        const { pluginId } = await ctx.params;
        const url = new URL(req.url);
        const format = url.searchParams.get('format') || 'cwplugin';
        
        if (!['zip', 'cwplugin'].includes(format)) {
            return NextResponse.json({ error: 'Invalid format parameter. Use "zip" or "cwplugin"' }, { status: 400 });
        }

        const manifest = await getManifestFromGitHub(pluginId);
        
        let releaseUrl = `${manifest.url}releases/latest/download/${manifest.id}.${format}`;
        const mirror = await pickMirrorFor(releaseUrl);
        releaseUrl = `${mirror}/${releaseUrl}`;

        return NextResponse.redirect(releaseUrl);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 404 });
    }
}
