import { Camera, Swords, Mountain, Hammer, CloudFog, Skull, Compass, Users, Image as ImageIcon, Shirt } from 'lucide-react';
import type { ReactNode } from 'react';

export interface ScreenshotsSubSection {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  content: ReactNode;
}

export const screenshotsSubSections: ScreenshotsSubSection[] = [
  {
    id: 'combat-action',
    title: 'Combat in Action',
    icon: <Swords className="w-5 h-5" />,
    summary: 'Parries, dodges, spells, and steel — Enshrouded\'s combat captured mid-swing, from Fell hunts to volcanic duels.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Combat in Enshrouded is fast, punishing, and deeply satisfying to watch. Every encounter mixes <strong className="text-[var(--text-gold)]">timed parries</strong>, dodge rolls with real i-frames, and twelve weapon families that each animate differently — daggers blur, greatswords crunch, and staves paint the sky with lightning.</p>
        <p>The shots below capture what makes fights memorable: Fell horrors wreathed in corrupting bloom, night ambushes lit only by spell-fire, and the split second before a parry turns into a killing riposte. Update 8&apos;s combat polish added new enemy telegraphs and hit reactions, so battles read better than ever.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Photo Tip</h4>
          <p className="text-xs">Craft the <strong className="text-[var(--text-primary)]">Camera</strong> at any Workbench (1 Metal Scrap + 2 Wood Logs), equip it, and press <strong className="text-[var(--text-primary)]">Tab</strong> to enter Photo Mode. Freeze-frame mid-dodge for the most dramatic angles — combat shots look best from ground level with the enemy backlit.</p>
        </div>
      </div>
    )
  },
  {
    id: 'world-biomes',
    title: 'World & Biomes',
    icon: <Mountain className="w-5 h-5" />,
    summary: 'From the Springlands\' green hills to the frozen Albaneve peaks — the landscapes of Embervale at their most breathtaking.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Embervale is one of the most beautiful ruined kingdoms in survival gaming. Nine distinct biomes roll into each other without loading screens: the pastoral <strong className="text-[var(--text-gold)]">Springlands</strong>, the fog-choked <strong className="text-[var(--text-gold)]">Revelwood</strong>, the scorched <strong className="text-[var(--text-gold)]">Kindlewastes</strong> desert, the vertical canyons of the <strong className="text-[var(--text-gold)]">Nomad Highlands</strong>, and the snowbound <strong className="text-[var(--text-gold)]">Albaneve Summits</strong>.</p>
        <p>Golden hour is when the voxel engine truly shows off — volumetric light pours through ruined keeps, mist pools in the valleys, and meteor showers streak the night sky. Every landscape below is a real, visitable place in the world.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Photo Tip</h4>
          <p className="text-xs">Climb an <strong className="text-[var(--text-primary)]">Ancient Spire</strong> before shooting — the draw distance from spire tops covers entire biomes. Dawn and dusk light lasts roughly 3 real minutes, so have your Camera already equipped.</p>
        </div>
      </div>
    )
  },
  {
    id: 'base-building',
    title: 'Base Building',
    icon: <Hammer className="w-5 h-5" />,
    summary: 'Voxel-by-voxel construction, cozy interiors, and thriving homesteads — what players build inside the Flame Altar radius.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Enshrouded&apos;s building system is quietly one of the best in the genre: true <strong className="text-[var(--text-gold)]">voxel terrain editing</strong>, hundreds of block shapes, no structural physics to fight, and a comfort system that rewards you for making spaces feel lived-in. If you can imagine it, you can build it.</p>
        <p>The gallery below spans the whole builder&apos;s journey — the Construction Hammer&apos;s first wall, furnished interiors with working stations, and full homesteads with tamed animals grazing outside. Rescued craftspeople move in and bring your base to life.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Photo Tip</h4>
          <p className="text-xs">Interiors photograph best at <strong className="text-[var(--text-primary)]">night with every light source lit</strong> — candles, braziers, and fireplaces cast warm pools of light that the Photo Mode camera exposes beautifully. Update 8&apos;s Adventure Sharing even requires one in-game screenshot of your world.</p>
        </div>
      </div>
    )
  },
  {
    id: 'the-shroud',
    title: 'Into the Shroud',
    icon: <CloudFog className="w-5 h-5" />,
    summary: 'The deadly grey fog that swallowed Embervale — eerie, beautiful, and full of things that want you dead.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">The Shroud is Enshrouded&apos;s signature: a luminous, teal-grey fog pooling in valleys and hollows where a strict timer counts down your survival. Inside, visibility drops to meters, Fell creatures stalk the murk, and some of the game&apos;s best loot waits for the brave.</p>
        <p>It is terrifying and gorgeous in equal measure. Light behaves differently in the fog — your torch becomes a halo, Shroud flora glows faintly, and the storm-wall at the fog&apos;s edge makes for some of the most atmospheric shots in the game.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Photo Tip</h4>
          <p className="text-xs">Stand at the <strong className="text-[var(--text-primary)]">Shroud&apos;s edge at dawn</strong> — the sun burning through the fog wall is the single best shot in Embervale. Watch your Shroud timer while framing; Photo Mode does not pause it.</p>
        </div>
      </div>
    )
  },
  {
    id: 'bosses-enemies',
    title: 'Bosses & Beasts',
    icon: <Skull className="w-5 h-5" />,
    summary: 'Fell Thunderbrutes, matriarchs, and monstrosities — Embervale\'s deadliest creatures frozen mid-battle.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">From the <strong className="text-[var(--text-gold)]">Fell Thunderbrute</strong> that teaches you humility in the Springlands to the <strong className="text-[var(--text-gold)]">Vukah Brawler</strong> and the horrors of the Hollow Halls, Enshrouded&apos;s bosses are spectacle fights — huge silhouettes, readable telegraphs, and arenas worth photographing.</p>
        <p>These captures show boss-scale combat at full intensity: lightning crashing into a charging matriarch, a Flameborn dwarfed by a Fell monstrosity, and night hunts where the monsters have the advantage. Study their wind-ups — then check our <strong className="text-[var(--text-primary)]">Bosses guide</strong> for the strategies that beat them.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Photo Tip</h4>
          <p className="text-xs">Boss arenas have the best lighting in the game — <strong className="text-[var(--text-primary)]">wait for the big telegraphed attack</strong> (the red flash or the roar), then trigger Photo Mode. The charge-up frames are pure poster material.</p>
        </div>
      </div>
    )
  },
  {
    id: 'exploration-glider',
    title: 'Exploration & Gliding',
    icon: <Compass className="w-5 h-5" />,
    summary: 'Glider flights over cloud seas, grappling-hook swings, spire climbs, and underwater dives — traversal as sightseeing.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Traversal is half the game. Craft the <strong className="text-[var(--text-gold)]">Glider</strong> early and every cliff becomes a launch pad; add the <strong className="text-[var(--text-gold)]">Grappling Hook</strong> and ruins turn into playgrounds. Upgrades like the Advanced Glider turn short hops into cross-biome flights above the clouds.</p>
        <p>The shots below celebrate movement: sunset glides over a sea of clouds, snowy mountain crossings, spire climbs, and the eerie quiet of underwater dives. In Embervale, the journey really is the destination.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Photo Tip</h4>
          <p className="text-xs">Photo Mode works <strong className="text-[var(--text-primary)]">mid-glide</strong> — jump from a spire, open the glider, then hit Tab. First-person view (press <strong className="text-[var(--text-primary)]">Z</strong>) hides your character for pure landscape shots; third-person keeps the cape flutter for drama.</p>
        </div>
      </div>
    )
  },
  {
    id: 'character-gear',
    title: 'Characters & Gear',
    icon: <Shirt className="w-5 h-5" />,
    summary: 'Armor dyeing, gem socketing, skill constellations, and crafting stations — the systems that make your Flameborn yours.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Your Flameborn is a canvas. The <strong className="text-[var(--text-gold)]">armor dye system</strong> recolors every piece from a full palette, <strong className="text-[var(--text-gold)]">gems socket</strong> into weapons for build-defining bonuses, and the Update 8 skill tree sprawls like a constellation — twelve branches deep.</p>
        <p>These interface captures show the customization layer up close: dyeing a mage&apos;s robes, inserting a Gem of Necromancy, navigating the skill constellations, and running an Ectoplasm Press. Pair this gallery with our <strong className="text-[var(--text-primary)]">Armor Sets</strong> and <strong className="text-[var(--text-primary)]">Character Builds</strong> guides to plan your look and your numbers together.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Photo Tip</h4>
          <p className="text-xs">For fashion shots, use the <strong className="text-[var(--text-primary)]">character preview in the dye menu</strong> — the neutral backdrop and zoom control frame armor better than any in-world lighting. Rotate slowly; cape physics settle after a second.</p>
        </div>
      </div>
    )
  },
  {
    id: 'co-op-multiplayer',
    title: 'Co-op Adventures',
    icon: <Users className="w-5 h-5" />,
    summary: 'Sixteen Flameborn, one world — shared bases, group Fell hunts, and the chaos of multiplayer Embervale.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Enshrouded supports up to <strong className="text-[var(--text-gold)]">16 players</strong> in one world, and everything scales with company: boss health, loot drops, and the sheer noise of a group Fell hunt. Friends can claim their own Flame Altars, specialize into different skill branches, and build a shared city instead of a lone hut.</p>
        <p>The best co-op moments are unplanned — a rescue sprint into the Shroud when a teammate&apos;s timer runs out, four gliders launching off the same spire at dawn, or everyone going quiet when the boss enters phase two.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Photo Tip</h4>
          <p className="text-xs">Coordinate a <strong className="text-[var(--text-primary)]">group formation before a boss pull</strong> — tanks front, casters spread — then shoot from the side as the fight opens. Action beats posing; mid-swing group shots feel alive.</p>
        </div>
      </div>
    )
  },
  {
    id: 'official-art',
    title: 'Official Art & Covers',
    icon: <ImageIcon className="w-5 h-5" />,
    summary: 'Key art and update covers from Keen Games — the official look of Enshrouded, Pact of the Flame, and Thralls of Twilight.',
    content: (
      <div className="space-y-5 text-[var(--text-secondary)] text-sm leading-relaxed">
        <p className="text-[var(--text-primary)]">Keen Games commissions painted key art for every major beat of Enshrouded&apos;s Early Access journey. The main cover shows a Flameborn overlooking an Embervale valley; <strong className="text-[var(--text-gold)]">Pact of the Flame</strong> and <strong className="text-[var(--text-gold)]">Thralls of Twilight</strong> each got their own update artwork.</p>
        <p>These are the official promotional images — useful as reference for the game&apos;s intended tone and palette, and a fitting endcap to the gallery. Everything else in this section is real in-engine gameplay; this final shelf is the painterly ideal the engine keeps chasing.</p>
        <div className="game-panel corner-decor p-5 mt-4">
          <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-3 tracking-wider uppercase">Credits</h4>
          <p className="text-xs">All artwork © Keen Games GmbH. Screenshots elsewhere in this section are official in-engine captures (Steam store) or community gameplay captures. Enshrouded Hub is a fan-made guide site, not affiliated with Keen Games.</p>
        </div>
      </div>
    )
  },
];

export const SCREENSHOTS_INTRO = {
  title: 'Game Screenshots',
  icon: <Camera className="w-5 h-5" />,
  description: 'Real in-game captures from across Embervale — combat, biomes, bases, bosses, the Shroud, and more.',
};
