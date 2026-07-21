import {
  AlertTriangle, Monitor, Wifi, Save, Gpu, Volume2, Gamepad2, Server, Bug, Wrench,
  Loader, ArrowUpCircle, ScrollText
} from 'lucide-react';
import type { ReactNode } from 'react';

export interface SubSection {
  id: string;
  title: string;
  icon: ReactNode;
  summary: string;
  content: ReactNode;
}

function InfoBox({ title, children, type = 'info' }: { title: string; children: React.ReactNode; type?: 'info' | 'warning' | 'tip' }) {
  const colors = {
    info: { border: 'border-[#6a9ad0]', bg: 'bg-[#6a9ad0]/5', icon: 'text-[#6a9ad0]' },
    warning: { border: 'border-orange-400', bg: 'bg-orange-400/5', icon: 'text-orange-400' },
    tip: { border: 'border-[var(--accent-green)]', bg: 'bg-[var(--accent-green)]/5', icon: 'text-[var(--accent-green)]' },
  };
  const c = colors[type];
  return (
    <div className={`${c.bg} border-l-2 ${c.border} pl-4 py-3 pr-3 rounded-r my-4`}>
      <h4 className={`font-cinzel text-xs font-bold ${c.icon} mb-2 tracking-wider uppercase`}>{title}</h4>
      <div className="text-xs text-[var(--text-secondary)] leading-relaxed">{children}</div>
    </div>
  );
}

function FixCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="game-panel corner-decor p-3 mb-3">
      <h4 className="font-cinzel text-xs font-bold text-[var(--text-gold)] mb-2">{title}</h4>
      <ol className="text-xs text-[var(--text-secondary)] space-y-1 list-decimal list-inside">
        {steps.map((step) => (
          <li key={step} dangerouslySetInnerHTML={{ __html: step.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 bg-[var(--border-gold)]/10 rounded text-[var(--text-gold)] text-[10px]">$1</code>') }} />
        ))}
      </ol>
    </div>
  );
}

function QuickFix({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-2 mb-2">
      <span className="text-[var(--accent-green)] mt-0.5 flex-shrink-0">✓</span>
      <div>
        <strong className="text-[var(--text-primary)] text-xs">{title}</strong>
        <span className="text-[var(--text-secondary)] text-xs"> — {desc}</span>
      </div>
    </div>
  );
}

export const troubleshootSubSections: SubSection[] = [
  {
    id: 'launch-crash',
    title: 'Launch & Crash Fixes',
    icon: <AlertTriangle className="w-5 h-5" />,
    summary: 'Game won\'t start, black screen, crash on startup, "Graphics System" errors, Vulkan initialization failures.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Launch and crash issues are among the most common problems in Enshrouded, especially during Early Access. This guide covers every known fix for startup failures, black screens, and crash-to-desktop issues.
        </p>

        <InfoBox title="Try These First (2-Minute Fixes)" type="tip">
          Before diving into detailed solutions, try these quick fixes that resolve 80% of launch issues:
          <br/><br/>
          <QuickFix title="Restart Steam & PC" desc="A full system reboot resolves temporary conflicts." />
          <QuickFix title="Verify Game Files" desc="Steam → Library → Right-click Enshrouded → Properties → Installed Files → Verify Integrity." />
          <QuickFix title="Update GPU Drivers" desc="Download latest drivers from NVIDIA/AMD/Intel official websites." />
          <QuickFix title="Run as Administrator" desc="Right-click Enshrouded.exe → Properties → Compatibility → Check 'Run as administrator'." />
          <QuickFix title="Disable Overlays" desc="Close Steam Overlay, Discord, GeForce Experience, and MSI Afterburner overlays." />
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">"Graphics System Couldn't Be Initialized" Error</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">This is the most common launch error, typically caused by Vulkan issues, integrated GPU conflicts, or outdated drivers.</p>
        
        <FixCard title="Fix 1: Install Latest Vulkan Runtime" steps={[
          "Download the latest Vulkan Runtime from LunarG: <code>https://vulkan.lunarg.com/sdk/home</code>",
          "Run the installer and follow the prompts.",
          "Restart your PC after installation.",
          "Try launching Enshrouded again."
        ]} />
        <FixCard title="Fix 2: Disable Integrated GPU (Dual-GPU Systems)" steps={[
          "Press <code>Windows Key + X</code> → Select <code>Device Manager</code>.",
          "Expand <code>Display adapters</code>.",
          "Right-click your integrated GPU (usually Intel) → Select <code>Disable device</code>.",
          "Confirm the action and restart your PC.",
          "If you need the iGPU later, repeat and select <code>Enable device</code>."
        ]} />
        <FixCard title="Fix 3: Force Dedicated GPU (NVIDIA/AMD)" steps={[
          "NVIDIA: Open <code>NVIDIA Control Panel</code> → Manage 3D Settings → Program Settings.",
          "Add Enshrouded manually if not listed.",
          "Set 'Preferred graphics processor' to <code>High-performance NVIDIA processor</code>.",
          "AMD: Open <code>Radeon Settings</code> → Preferences → Additional Settings → Power → Switchable Graphics.",
          "Select Enshrouded and set <code>High Performance</code> profile."
        ]} />
        <FixCard title="Fix 4: Delete Vulkan ImplicitLayers Registry" steps={[
          "Press <code>Windows Key + R</code>, type <code>regedit</code>, press Enter.",
          "Navigate to: <code>HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\Vulkan</code>",
          "Delete the <code>ImplicitLayers</code> folder (this is a ReShade entry that causes crashes).",
          "Close Registry Editor and launch the game."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Black Screen on Launch</h3>
        <FixCard title="Fix 1: Disable Fullscreen Optimizations" steps={[
          "Navigate to Enshrouded game directory (Steam → Manage → Browse local files).",
          "Right-click <code>enshrouded.exe</code> → Properties → Compatibility tab.",
          "Check <code>Disable fullscreen optimizations</code>.",
          "Click <code>Change high DPI settings</code> → Check <code>Override high DPI scaling behavior</code> → Select <code>Application</code>.",
          "Click Apply and OK."
        ]} />
        <FixCard title="Fix 2: Delete Local Config to Reset Graphics" steps={[
          "Navigate to: <code>%LocalAppData%\Enshrouded\Saved\Config\WindowsNoEditor</code>",
          "Delete <code>enshrouded_local.json</code>.",
          "This resets all graphics settings to default. The game will recreate the file on next launch.",
          "Note: This fix also resolves the Intel Arc A770 'Max Quality' texture crash (see below)."
        ]} />
        <FixCard title="Fix 3: Add -fullscreen Launch Option" steps={[
          "Steam → Library → Right-click Enshrouded → Properties.",
          "In the General tab, find <code>Launch Options</code>.",
          "Type: <code>-fullscreen</code>",
          "Close the window and launch the game."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Intel Arc A770 Specific: Max Quality Texture Crash</h3>
        <InfoBox title="Intel Official Acknowledgment" type="info">
          Intel has officially acknowledged that Arc A770 16GB cards crash on launch when Texture Resolution is set to "Max Quality". Intel is investigating. This issue causes a silent crash with no error message.
        </InfoBox>
        <FixCard title="Workaround: Reset Texture Resolution" steps={[
          "In Steam, right-click Enshrouded → Manage → Browse local files.",
          "Delete the file <code>enshrouded_local.json</code>.",
          "Launch the game — it will start with default settings.",
          "After launch, set Texture Resolution to any value <strong>other than Max Quality</strong> (High is recommended).",
          "The game should now launch normally."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">enshrouded.exe Has Crashed — MiniDump Error</h3>
        <FixCard title="Fix 1: Close ASUS GPU Tweak III" steps={[
          "ASUS GPU Tweak III is a known conflict with Enshrouded.",
          "Find the icon in your system tray → Right-click → Close.",
          "Alternatively: Press <code>Ctrl + Shift + Esc</code> → Find ASUS GPU Tweak III → End Task.",
          "Also close: MSI Afterburner, EVGA Precision X1, and other GPU tuning software."
        ]} />
        <FixCard title="Fix 2: Disable GPU Overclocking" steps={[
          "If you have overclocked your GPU, revert to stock clocks.",
          "Enshrouded is sensitive to unstable overclocks.",
          "Use your GPU manufacturer's software to reset to defaults.",
          "Even factory overclocks (like some AIB cards) can cause issues — try underclocking by 50MHz."
        ]} />
        <FixCard title="Fix 3: Uninstall Twitch Studio" steps={[
          "Twitch Studio has known conflicts with Vulkan.",
          "Uninstall it via Windows Settings → Apps.",
          "This is a confirmed fix for the 'Graphics System' startup issue."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">13th/14th Gen Intel CPU Crashes</h3>
        <InfoBox title="Intel CPU Instability" type="warning">
          13th and 14th Gen Intel desktop CPUs (i7-13700K, i9-13900K, i7-14700K, i9-14900K, etc.) have a well-documented stability issue due to incorrect voltage/clock settings in default BIOS configurations. This causes crashes in shader compilation and other CPU-intensive tasks.
        </InfoBox>
        <FixCard title="Fix: Update BIOS + Limit CPU Power" steps={[
          "Update your motherboard BIOS to the latest version (includes Intel fix).",
          "Enter BIOS → Look for <code>Intel Default Settings</code> profile and enable it.",
          "If no Intel Default profile: Manually set power limits — PL1=125W, PL2=181W.",
          "Alternatively: In BIOS, reduce Performance-core ratio by 2-3 multipliers.",
          "Save and exit, then test Enshrouded."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Additional Troubleshooting Steps</h3>
        <FixCard title="Antivirus Exclusion" steps={[
          "Add Enshrouded folder to your antivirus exclusion list.",
          "Windows Security: Settings → Update & Security → Windows Security → Virus & threat protection → Exclusions.",
          "Third-party antivirus: Check your AV software's exclusion settings."
        ]} />
        <FixCard title="Clean Boot Windows" steps={[
          "Press <code>Windows Key + R</code> → Type <code>msconfig</code> → Enter.",
          "Go to Services tab → Check <code>Hide all Microsoft services</code> → Click <code>Disable all</code>.",
          "Go to Startup tab → Click <code>Open Task Manager</code> → Disable all startup items.",
          "Restart your PC and try launching Enshrouded.",
          "If it works, re-enable services one by one to find the conflict."
        ]} />
        <FixCard title="Complete Reinstall (Last Resort)" steps={[
          "Steam → Library → Right-click Enshrouded → Manage → Uninstall.",
          "After uninstall: Delete remaining files at <code>%LocalAppData%\Enshrouded</code>.",
          "Restart your PC.",
          "Reinstall Enshrouded from Steam.",
          "Let shader compilation finish on first launch (do not skip)."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Additional Fixes from Community</h3>
        <FixCard title="Install Visual C++ Redistributables" steps={[
          "Download the latest <strong>Visual C++ Redistributable</strong> from Microsoft.",
          "Install BOTH x64 and x86 versions.",
          "Restart your PC.",
          "Many UE4 games require these libraries — missing them causes silent crashes."
        ]} />
        <FixCard title="Increase Virtual Memory (Page File)" steps={[
          "Press <code>Windows Key</code> → Search <code>View Advanced System Settings</code> → Enter.",
          "Under Performance, click <code>Settings</code> → Advanced tab → Virtual Memory section → <code>Change</code>.",
          "Uncheck <code>Automatically manage paging file size</code>.",
          "Select your system drive → <code>Custom size</code>.",
          "Initial size: <code>1.5 × your total RAM</code> (e.g., 24576 for 16GB RAM).",
          "Maximum size: <code>3 × your total RAM</code> (e.g., 49152 for 16GB RAM).",
          "Click Set → OK → Restart your PC."
        ]} />
        <FixCard title="Run in Windows 8 Compatibility Mode" steps={[
          "Navigate to Enshrouded game directory.",
          "Right-click <code>enshrouded.exe</code> → Properties → Compatibility tab.",
          "Check <code>Run this program in compatibility mode for:</code>",
          "Select <code>Windows 8</code> from the dropdown.",
          "Also check <code>Run this program as an administrator</code>.",
          "Click Apply → OK → Try launching."
        ]} />
        <FixCard title="Disconnect Unnecessary USB Devices & Monitors" steps={[
          "Unplug ALL non-essential USB devices: external drives, controllers, joysticks, racing wheels, webcams.",
          "Known conflicts: Logitech wheels, Razer Tartarus, vjoy, Razer Synapse lighting, Corsair software.",
          "Also end these processes in Task Manager: <code>Nahimic services</code>, <code>lightingservice.exe</code>.",
          "If using multiple monitors: disconnect all but your primary monitor for testing.",
          "Try launching the game with minimal connected hardware."
        ]} />
        <FixCard title="Rename/Delete OpenXR Folder" steps={[
          "Navigate to Enshrouded installation folder.",
          "Find the <code>OpenXR</code> folder.",
          "Rename it to <code>OpenXR_old</code> (safer than deleting — you can revert).",
          "Alternatively: Open the Win64 folder inside OpenXR and delete everything inside it.",
          "Try launching the game."
        ]} />
        <FixCard title="Edit Hosts File (Block Epic Games Data Routers)" steps={[
          "Open Command Prompt as Administrator.",
          "Type: <code>notepad %windir%\system32\drivers\etc\hosts</code>",
          "Add this line at the end of the file:",
          "  <code>0.0.0.0 datarouter.ol.epicgames.com datarouter-weighted.ol.epicgames.com</code>",
          "Save the file and restart your PC.",
          "This blocks certain Epic Games telemetry that can conflict with UE4 games."
        ]} />
      </div>
    ),
  },
  {
    id: 'performance-fps',
    title: 'Performance & FPS Optimization',
    icon: <Monitor className="w-5 h-5" />,
    summary: 'Low FPS, stuttering, shader compilation stutter, traversal stutter, VRAM issues, and complete optimization guides for every PC tier.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded is graphically demanding — dense fog, volumetric lighting, and high foliage density can crush FPS. This guide covers every optimization technique, from quick fixes to advanced tweaks, organized by PC tier.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Critical Fix: Traversal Stutter</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">Unreal Engine streaming issues cause stutters when sprinting, gliding, or moving between biomes. This is the #1 performance complaint.</p>
        <FixCard title="Fix: Clear Shader Cache" steps={[
          "Navigate to: <code>%LocalAppData%\Enshrouded\Saved\Shaders</code>",
          "Delete the entire Shaders folder.",
          "Restart the game and let shaders precompile (this may take 5-15 minutes).",
          "Result: 1% lows improved from 47 FPS → 63 FPS in benchmark tests."
        ]} />
        <FixCard title="Steam Shader Pre-Caching" steps={[
          "Open Steam → Steam menu (top-left) → Settings.",
          "Click <code>Shader Pre-Caching</code> in left sidebar.",
          "Enable both: <code>Enable Shader Pre-Caching</code> and <code>Allow background processing of Vulkan shaders</code>.",
          "Restart Steam and let it download shader caches before playing."
        ]} />
        <FixCard title="NVIDIA Shader Cache Size" steps={[
          "Right-click Desktop → <code>NVIDIA Control Panel</code>.",
          "Go to Manage 3D Settings → Global Settings.",
          "Find <code>Shader Cache Size</code> → Change from default to <code>10 GB</code> or <code>Unlimited</code>.",
          "Click Apply and restart your PC."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Best In-Game Graphics Settings (Universal)</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Display Mode:</strong> Fullscreen (NOT Borderless) — eliminates 10-20% CPU latency</li>
            <li><strong className="text-[var(--text-primary)]">Upscaling:</strong> NVIDIA=DLSS Quality, AMD=FSR 2 Quality, Intel=XeSS Balanced — mandatory for smooth FPS</li>
            <li><strong className="text-[var(--text-primary)]">Shadows:</strong> Medium — the single heaviest setting. Dropping from High gives 6-7% FPS boost.</li>
            <li><strong className="text-[var(--text-primary)]">Indirect Lighting:</strong> Quality (mid-range) / Performance (low-end)</li>
            <li><strong className="text-[var(--text-primary)]">Foliage:</strong> Medium — High hits both GPU and VRAM hard</li>
            <li><strong className="text-[var(--text-primary)]">Post-Processing:</strong> Low — visually subtle but surprisingly heavy</li>
            <li><strong className="text-[var(--text-primary)]">Effects:</strong> Medium — impacts fog rendering heavily</li>
            <li><strong className="text-[var(--text-primary)]">Textures:</strong> High (6GB+ VRAM) / Medium (4GB VRAM)</li>
            <li><strong className="text-[var(--text-primary)]">View Distance:</strong> Medium — good balance of visibility and performance</li>
            <li><strong className="text-[var(--text-primary)]">Anti-Aliasing:</strong> TAA High — best stability with minimal cost</li>
            <li><strong className="text-[var(--text-primary)]">V-Sync:</strong> OFF — adds input latency and can cause stuttering</li>
            <li><strong className="text-[var(--text-primary)]">Dynamic Resolution:</strong> OFF — causes visible quality fluctuations</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Settings by PC Tier</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-green-400 mb-2">Low-End (GTX 1050 Ti / GTX 1650 / RX 570)</h4>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li>• Resolution: 900p | Upscaler: FSR 2 Balanced</li>
            <li>• Shadows: Low | Textures: Medium | Foliage: Low</li>
            <li>• Post-Processing: Low | Effects: Low</li>
            <li>• <strong>Expected: 40–55 FPS</strong></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-blue-400 mb-2">Mid-Range (RTX 2060 / RX 6600 / RTX 3060)</h4>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li>• Resolution: 1080p | Upscaler: DLSS Quality</li>
            <li>• Shadows: Medium | Textures: High | Foliage: Medium</li>
            <li>• Post-Processing: Low | Effects: Medium</li>
            <li>• <strong>Expected: 75–95 FPS</strong></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-purple-400 mb-2">High-End (RTX 3070–4070)</h4>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li>• Resolution: 1440p | Upscaler: DLSS Quality or Off</li>
            <li>• Shadows: High | Textures: High | Foliage: High</li>
            <li>• <strong>Expected: 110–145 FPS</strong></li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-yellow-400 mb-2">Ultra (RTX 4080+ / RX 7900 XTX)</h4>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li>• Resolution: 1440p or 4K | Upscaler: Off or DLSS Quality</li>
            <li>• All settings: High/Ultra</li>
            <li>• <strong>Expected: 100+ FPS at 4K, 150+ at 1440p</strong></li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Windows System Optimizations</h3>
        <FixCard title="Essential Windows Tweaks" steps={[
          "Enable Resizable BAR in BIOS/UEFI (provides consistent FPS uplift in CPU-bound scenarios).",
          "Windows Game Mode: ON (Settings → Gaming → Game Mode).",
          "Hardware-Accelerated GPU Scheduling (HAGS): ON (Settings → System → Display → Graphics → Default settings).",
          "Power Plan: High Performance (Control Panel → Power Options).",
          "Enable XMP/EXPO memory profile in BIOS for faster RAM.",
          "Disable Steam Overlay, Discord Hardware Acceleration, and Xbox Game Bar.",
          "Close Chrome/Edge completely before playing (browsers use 1-2GB VRAM)."
        ]} />

        <InfoBox title="VRAM Is the Main Bottleneck" type="warning">
          In fog-dense areas and large bases, VRAM spikes are the primary cause of micro-stutters. If you experience hitching in the Shroud or around your base, your VRAM is likely maxed out. Lower Textures to Medium, reduce Foliage, and close all background applications (especially web browsers). These changes have a bigger impact than any CPU optimization.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">GPU-Specific Optimizations</h3>
        <FixCard title="NVIDIA Control Panel Settings" steps={[
          "Open NVIDIA Control Panel → Manage 3D Settings → Program Settings.",
          "Add Enshrouded manually.",
          "Monitor Tech: G-Sync (if available).",
          "Maximum Pre-rendered frames: 2.",
          "Threaded optimization: On.",
          "Power Management: Prefer Maximum Performance.",
          "Texture Filtering – Quality: Performance."
        ]} />
        <FixCard title="AMD Radeon Settings" steps={[
          "Open AMD Adrenalin → Settings → Graphics.",
          "Radeon Anti-Lag: Enabled.",
          "Radeon Chill: Disabled.",
          "Radeon Boost: Disabled (can cause visual artifacts).",
          "Wait for Vertical Refresh: Disabled (unless using FreeSync).",
          "Shader Cache: On."
        ]} />
      </div>
    ),
  },
  {
    id: 'multiplayer-issues',
    title: 'Multiplayer & Connection',
    icon: <Wifi className="w-5 h-5" />,
    summary: 'Can\'t connect to friends, lag, disconnects, server not showing up, version mismatch, Steam relay issues.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Multiplayer issues in Enshrouded are common due to its Early Access networking system, Steam relay routing, and the complexity of port forwarding. This guide covers every connection problem and its fix.
        </p>

        <InfoBox title="Steam Relay Latency (Known Issue Since Late 2024)" type="warning">
          Since a late 2024 update, Enshrouded routes ALL multiplayer traffic through Steam's relay network — including LAN connections. This adds 150-500ms latency even for players on the same network. This is a game-level design decision by Keen Games, not something you can fully fix. However, matching Steam download regions helps minimize the extra latency.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Can't Connect to Server</h3>
        <FixCard title="Fix 1: Port Forwarding" steps={[
          "Enshrouded uses two UDP ports: <code>15636</code> (game traffic) and <code>15637</code> (Steam query port).",
          "Log into your router's admin panel (usually 192.168.1.1 or 192.168.0.1).",
          "Create TWO separate port forwarding rules (NOT a range):",
          "  - Rule 1: UDP 15636 → 15636 to your PC's local IP",
          "  - Rule 2: UDP 15637 → 15637 to your PC's local IP",
          "Also forward Steam port <code>27015</code> UDP if running other game servers."
        ]} />
        <FixCard title="Fix 2: Windows Firewall Rules" steps={[
          "Open PowerShell as Administrator.",
          "Run: <code>New-NetFirewallRule -DisplayName 'Enshrouded Game' -Direction Inbound -Protocol UDP -LocalPort 15636 -Action Allow</code>",
          "Run: <code>New-NetFirewallRule -DisplayName 'Enshrouded Query' -Direction Inbound -Protocol UDP -LocalPort 15637 -Action Allow</code>",
          "Also check third-party antivirus/firewall software for their own rules."
        ]} />
        <FixCard title="Fix 3: Steam Download Region Match" steps={[
          "Have ALL players set Steam download region to the same region as the server's location.",
          "Steam → Settings → Downloads → Download Region.",
          "If server is in Chicago, everyone should pick 'US - Chicago'.",
          "Mismatched regions can add 100-200ms of unnecessary latency."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Server Not Showing in Browser</h3>
        <FixCard title="Multiple Connection Methods" steps={[
          "<strong>Method 1 — Direct IP:</strong> Main Menu → Play → Join → Press T for IPv4 search → Enter server IP.",
          "<strong>Method 2 — Steam Favorites:</strong> Steam → View → Game Servers → Favorites → Add Server by IP:15637.",
          "<strong>Method 3 — Steam Invite:</strong> Right-click friend's name in Steam → Invite to Game.",
          "Note: Server browser can take 1-2 minutes to populate. Be patient after restarts."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">"Game Creation Failed" (Error 5)</h3>
        <FixCard title="Fixes for Error 5" steps={[
          "Check <code>reservedSlots</code> in <code>enshrouded_server.json</code> — must be greater than 0.",
          "Check <code>enshrouded_server.log</code> for specific errors.",
          "If 'Disk Full': Free up at least 10GB of disk space.",
          "If stuck on 'Loading Save': Your save may be corrupted.",
          "  - Go to <code>./savegame/</code>",
          "  - Rename current save to <code>3ad...old</code>",
          "  - Rename a <code>3ad..._backup</code> file to the original name",
          "Verify server has 6-8GB RAM minimum."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Version Mismatch</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">After game updates, client and server must be on the same version. This is the #1 cause of connection failures.</p>
        <FixCard title="Fix Version Mismatch" steps={[
          "<strong>Self-hosted servers:</strong> Update via SteamCMD — run <code>app_update 2278520</code>.",
          "<strong>Managed servers:</strong> Restart from control panel — most hosts auto-update on restart.",
          "<strong>Players:</strong> Verify game files in Steam (Right-click → Properties → Installed Files → Verify Integrity).",
          "<strong>Always restart the server before connecting</strong> after a game update.",
          "Server browser now shows version mismatch indicators."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Random Disconnects</h3>
        <FixCard title="Disconnect Fixes" steps={[
          "Switch from WiFi to wired connection (solves majority of random disconnects).",
          "Clear Steam download cache: Steam → Settings → Downloads → Clear Download Cache.",
          "Flush DNS: Open CMD → type <code>ipconfig /flushdns</code> → Enter.",
          "Try Google DNS: 8.8.8.8 and 8.8.4.4 (IPv4 only — Enshrouded doesn't use IPv6).",
          "Check Steam Privacy Settings — private profiles may prevent session discovery.",
          "If 'server overloaded' message appears: Server needs more RAM or a restart."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Rubberbanding / Lag</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">Not all lag is the same. Identify the cause to apply the right fix.</p>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-[10px] font-bold text-[var(--text-gold)] mb-2">Network Lag (Teleporting, Delayed Actions)</h4>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li>• Steam region mismatch — see Fix 3 above</li>
            <li>• WiFi instability — switch to wired</li>
            <li>• Geographic distance — choose central server location</li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4 mt-2">
          <h4 className="font-cinzel text-[10px] font-bold text-[var(--text-gold)] mb-2">Server Performance Lag (Everyone Lags)</h4>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li>• Memory leaks — schedule auto-restarts every 8-12 hours</li>
            <li>• Players spread across biomes — group up to reduce server load</li>
            <li>• Insufficient RAM — allocate 8GB for 4-8 players, more for larger groups</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'save-data',
    title: 'Save Data & Recovery',
    icon: <Save className="w-5 h-5" />,
    summary: 'Save corruption, world rollback, data loss prevention, backup strategies, and recovery methods.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Save data issues are devastating in a game where you've invested dozens or hundreds of hours. This guide covers prevention, backup strategies, and recovery methods for save corruption and world rollback.
        </p>

        <InfoBox title="Save Data Protection (Hotfix #5)" type="info">
          Keen Games released a critical hotfix (Hotfix #5, January 26, 2024) that addressed a rare issue causing world and character save data to stop updating. The game now has improved save data protection to prevent corruption. However, players should still maintain their own backups.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Preventing Save Corruption</h3>
        <FixCard title="Best Practices" steps={[
          "<strong>Graceful Shutdown:</strong> Use the Stop button and wait for the server to shut down fully — never force-kill.",
          "<strong>Wait Before Stopping:</strong> Allow at least 60 seconds after the last player disconnects before stopping the server.",
          "<strong>Regular Backups:</strong> Download regular backups of the <code>savegame/</code> directory via SFTP.",
          "<strong>Don't Wipe Without Backup:</strong> Always download a copy of the entire <code>savegame/</code> directory before any world reset.",
          "<strong>Keep Multiple Backups:</strong> Maintain at least 3 backup copies from different time periods."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Save File Locations</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li><strong className="text-[var(--text-primary)]">Steam Save (Client):</strong> <code>%LocalAppData%\Enshrouded\Saved\</code></li>
            <li><strong className="text-[var(--text-primary)]">Dedicated Server:</strong> <code>&lt;server_install&gt;\savegame\</code></li>
            <li><strong className="text-[var(--text-primary)]">Steam Cloud:</strong> Enable in Steam → Enshrouded → Properties → General → Keep games saves in Steam Cloud</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Recovering from Corruption</h3>
        <FixCard title="Method 1: Restore from Backup" steps={[
          "If you have a backup: Re-upload the <code>savegame/</code> folder via SFTP to restore.",
          "If no backup: Check if your hosting provider has server-level snapshots available.",
          "Delete the corrupted <code>3ad...</code> save file.",
          "Rename a <code>3ad..._backup</code> file to the original filename.",
          "Restart the server and test."
        ]} />
        <FixCard title="Method 2: Reset Graphics Config" steps={[
          "Navigate to: <code>%LocalAppData%\Enshrouded\Saved\Config\WindowsNoEditor</code>",
          "Delete <code>enshrouded_local.json</code>.",
          "This resets all settings to default and can fix various launch/save issues.",
          "The game will create a fresh config file on next launch."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">"Failed to Initialize Save Data" Fix</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">Some players encountered a save data initialization error that prevented the game from creating or loading saves.</p>
        <FixCard title="Fix" steps={[
          "Navigate to your save directory: <code>%LocalAppData%\Enshrouded\Saved\</code>.",
          "If the folder is missing or empty, create it manually.",
          "Ensure you have write permissions to the folder.",
          "Run Steam as Administrator.",
          "Disable any cloud sync conflicts (OneDrive, etc.)."
        ]} />
      </div>
    ),
  },
  {
    id: 'stuck-freeze',
    title: 'Stuck & Freeze Issues',
    icon: <Loader className="w-5 h-5" />,
    summary: 'Infinite loading screens, getting stuck falling, game freezing, white screen, and unresponsive game fixes.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Getting stuck or frozen in Enshrouded can happen in various situations — during loading, while exploring, or after gliding into terrain. This guide covers every known stuck/freeze scenario and how to escape it.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Infinite Loading Screen</h3>
        <InfoBox title="Patch #14 Fixed This" type="info">
          Keen Games officially fixed the endless world loading issue in Patch #14 (v0.9.1.1, May 2026). If you still experience this, ensure your game is fully updated to the latest version.
        </InfoBox>
        <FixCard title="Fixes for Infinite Loading" steps={[
          "<strong>Verify game files first</strong> — Steam → Properties → Installed Files → Verify Integrity.",
          "<strong>Restart the game and Steam completely</strong> — close both, wait 30 seconds, relaunch.",
          "<strong>Update graphics drivers</strong> — outdated drivers are a common cause of loading hangs.",
          "<strong>Lower graphics settings</strong> before loading the problematic area.",
          "<strong>Delete shader cache:</strong> <code>%LocalAppData%\Enshrouded\Saved\Shaders</code> → delete folder → let it rebuild.",
          "<strong>Reinstall as last resort</strong> — fully uninstall, delete LocalAppData folder, reinstall."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Stuck Falling / Stuck in Terrain</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">The Enshrouded community has been asking for a dedicated "/stuck" command or unstuck button. Until Keen Games adds one, use these workarounds:</p>
        <FixCard title="How to Get Unstuck" steps={[
          "<strong>Fast Travel:</strong> If you can open the map, fast travel to any discovered location — the quickest escape.",
          "<strong>Suicide / Let Enemies Kill You:</strong> If stuck in terrain and can't move, let your Shroud timer run out or aggro nearby enemies to die and respawn.",
          "<strong>Glider + Grappling Hook:</strong> Sometimes you can activate your glider mid-fall to regain control, or grapple to a nearby surface.",
          "<strong>Relog:</strong> Exit to main menu and reload — this resets your position to the last valid ground point.",
          "<strong>Co-op Rescue:</strong> If playing multiplayer, ask a teammate to place a bed nearby and set it as your respawn point, then die.",
          "<strong>Avoid Edge Gliding:</strong> Many stuck-falling bugs happen when gliding into cliff edges or building corners — give these a wide berth."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Game Freezes During Play</h3>
        <FixCard title="Freeze Fixes" steps={[
          "<strong>Check for overheating:</strong> Use HWiNFO or MSI Afterburner to monitor CPU/GPU temps. Over 85°C causes thermal throttling and freezes.",
          "<strong>Cap your frame rate:</strong> Uncapped FPS can cause instability. Cap to your monitor's refresh rate or 60/120 FPS.",
          "<strong>Disable background apps:</strong> Close Chrome, Discord, Spotify, and other resource-heavy applications.",
          "<strong>Run Windowed Mode:</strong> Try windowed or borderless windowed instead of fullscreen — this reduces GPU driver crashes.",
          "<strong>Update BIOS:</strong> Outdated motherboard BIOS can cause system instability during gaming. Download from manufacturer website.",
          "<strong>Check RAM:</strong> Run Windows Memory Diagnostic (search in Start menu) to check for faulty RAM sticks."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">White Screen on Launch</h3>
        <FixCard title="White Screen Fixes" steps={[
          "This is typically a DirectX/Vulkan initialization failure.",
          "<strong>Force DirectX 11:</strong> Steam → Properties → Launch Options → add <code>-dx11</code>.",
          "<strong>Update GPU drivers</strong> to the latest version.",
          "<strong>Install latest Vulkan Runtime</strong> from LunarG website.",
          "<strong>Disable integrated GPU</strong> in Device Manager (see Launch & Crash Fixes).",
          "<strong>Delete enshrouded_local.json</strong> to reset graphics settings to default."
        ]} />
      </div>
    ),
  },
  {
    id: 'gpu-graphics',
    title: 'GPU & Graphics Issues',
    icon: <Gpu className="w-5 h-5" />,
    summary: 'Texture corruption, black textures, VRAM crashes, world assets not loading, AMD/NVIDIA/Intel specific fixes.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Graphics issues range from minor visual glitches to game-breaking texture corruption. This guide covers GPU-specific bugs, VRAM management, and visual artifact fixes.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Texture Corruption & Black Textures</h3>
        <InfoBox title="AMD Hotfix #38 (May 2026)" type="info">
          A specific fix was released for black textures reported by AMD GPU users. The issue was related to shader compilation errors on certain driver versions. If you still see black textures, update to the latest AMD driver.
        </InfoBox>
        <FixCard title="General Texture Fix" steps={[
          "Update your graphics driver to the latest version.",
          "Clear GPU shader cache: NVIDIA Control Panel → Shader Cache Size → Set to Unlimited → Apply → Restart.",
          "Verify game files in Steam.",
          "If corruption persists: Delete <code>%LocalAppData%\Enshrouded\Saved\Shaders</code> folder and let shaders recompile.",
          "For AMD: AMD Adrenalin → Settings → Graphics → Reset Shader Cache."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">AMD-Specific: Elixir Well Texture Corruption</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">AMD officially fixed texture corruption at the first Elixir Well location on Radeon RX 7000 and RX 9000 series cards in driver version 26.1.1.</p>
        <FixCard title="Fix" steps={[
          "Update to AMD Software Adrenalin Edition 26.1.1 or later.",
          "The fix specifically addresses: 'Texture corruption may be observed when playing Enshrouded while at the first Elixir Well location on Radeon RX 7000 series and Radeon RX 9000 series graphics products.'"
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">World Assets Not Loading</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">Symptoms: invisible terrain, flickering textures, missing environmental objects, crashes when spawning/loading.</p>
        <FixCard title="Fixes" steps={[
          "<strong>Verify game files:</strong> Steam → Library → Right-click Enshrouded → Properties → Installed Files → Verify Integrity of Game Files.",
          "<strong>Update GPU drivers:</strong> Download from NVIDIA/AMD/Intel official website.",
          "<strong>Temporarily disable mods:</strong> If using any mods, disable them.",
          "<strong>Clean reinstall:</strong> Uninstall → delete <code>%LocalAppData%\Enshrouded</code> → reinstall.",
          "<strong>Disable overlays:</strong> Steam Overlay, GeForce Experience, Discord overlays can interfere with rendering."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Out of Video Memory (VRAM) Crash</h3>
        <FixCard title="VRAM Management" steps={[
          "Lower Texture Resolution to Medium (saves 2-3GB VRAM).",
          "Reduce Foliage quality to Low or Medium.",
          "Close ALL background applications, especially Chrome/Edge (uses 1-2GB VRAM).",
          "Enable your GPU upscaler (DLSS/FSR/XeSS) — reduces render resolution.",
          "Lower Shadow quality — shadows use significant VRAM.",
          "If on 4GB VRAM GPU: Consider playing at 900p resolution."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Intel GPU: "No Compatible Graphics Device Found"</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">This error occurs on systems with older Intel integrated graphics or when the game fails to detect the discrete GPU.</p>
        <FixCard title="Fixes" steps={[
          "Ensure your system meets minimum requirements (Intel Arc A770 or better recommended).",
          "Disable integrated GPU in Device Manager (see Launch & Crash Fixes section).",
          "Update Intel Arc drivers from Intel's official website.",
          "Set Texture Resolution to anything except Max Quality (known Intel Arc crash).",
          "Note: Very old Intel HD/UHD integrated graphics are NOT supported."
        ]} />
      </div>
    ),
  },
  {
    id: 'audio-input',
    title: 'Audio & Input Issues',
    icon: <Volume2 className="w-5 h-5" />,
    summary: 'No sound, audio cutting out, controller not working, key binding issues, microphone problems.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Audio and input issues can significantly impact gameplay experience. This guide covers sound problems, controller support, and input configuration.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">No Sound / Audio Issues</h3>
        <FixCard title="Audio Troubleshooting" steps={[
          "Check in-game audio settings — ensure Master Volume is not muted.",
          "Windows Sound Settings: Right-click speaker icon → Open Sound Settings → Test output device.",
          "Set correct default playback device in Windows.",
          "Update audio drivers (Realtek, etc.).",
          "Disable audio enhancements: Sound Control Panel → Playback → Properties → Enhancements → Disable all enhancements.",
          "Run Windows Audio Troubleshooter."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Controller Not Working</h3>
        <FixCard title="Controller Fixes" steps={[
          "Ensure controller is connected BEFORE launching the game.",
          "Steam → Settings → Controller → General Controller Settings → Enable your controller type (Xbox/PlayStation/etc.).",
          "Try different USB ports (avoid USB hubs).",
          "Update controller firmware (Xbox Accessories app, DS4Windows for PlayStation).",
          "Disable Steam Input for Enshrouded: Right-click Enshrouded → Properties → Controller → Override → Disable Steam Input."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Proximity Voice Chat Not Working</h3>
        <FixCard title="Voice Chat Fixes" steps={[
          "Check that microphones are not disabled by default (Patch 7 changed this).",
          "Settings → Audio → Enable microphone.",
          "Check proximity voice chat UI range was increased in Patch 7.",
          "Ensure correct input device is selected in Windows Sound settings.",
          "Check Windows privacy settings: Allow apps to access microphone."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Key Binding Issues (Update 8)</h3>
        <InfoBox title="Update 8 Key Binding Changes" type="warning">
          Update 8 changed default key bindings for several features. If controls feel wrong after updating, check your key bindings in Settings → Controls. You may need to rebind to your preferred layout.
        </InfoBox>
        <FixCard title="Key Binding Fixes" steps={[
          "Settings → Controls → Review all bindings.",
          "Reset to defaults if bindings are混乱.",
          "Update 8 added full key binding customization — take advantage of it.",
          "Note: Quick Stack key can be rebound if it conflicts with other actions."
        ]} />
      </div>
    ),
  },
  {
    id: 'steam-deck-linux',
    title: 'Steam Deck & Linux',
    icon: <Gamepad2 className="w-5 h-5" />,
    summary: 'Steam Deck settings, Proton versions, Linux server issues, CryoUtilities, and best configurations.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Enshrouded is rated Steam Deck Unsupported but is fully playable with the right settings. Linux dedicated servers have known issues. This guide covers optimal configurations for both.
        </p>

        <InfoBox title="Steam Deck Status" type="info">
          Enshrouded is rated <strong>Steam Deck Unsupported</strong> by Valve, but it is fully playable with Proton Experimental or Proton GE. The game received specific Steam Deck improvements in Update 5 (Souls of the Frozen Frontier), including shader pre-compilation at game start and text size adjustment.
        </InfoBox>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Best Steam Deck Settings</h3>
        <FixCard title="Recommended Settings (30 FPS Stable)" steps={[
          "<strong>Proton:</strong> Use Proton Experimental or Proton GE (via ProtonUp-QT).",
          "<strong>CryoUtilities:</strong> Highly recommended — install before playing (significant performance boost).",
          "Anti-Aliasing: <code>FSR2</code>",
          "FSR2 Quality: <code>Balance</code>",
          "Texture Resolution: <code>Quality</code>",
          "Shadow Quality: <code>Performance</code>",
          "Contact Shadows: <code>Off</code>",
          "Indirect Lighting: <code>Balance</code>",
          "Reflections: <code>Balance</code>",
          "Fog Quality: <code>Performance</code>",
          "Volumetric Shadow Quality: <code>Performance</code>",
          "SSAO: <code>Performance</code>",
          "Distant Objects: <code>Off</code>",
          "Voxel Detail Models: <code>Off</code>",
          "Small Foliage: <code>Performance</code>",
          "Tessellation: <code>Off</code>",
          "Point Light Shadows: <code>Off</code>"
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Steam Deck Specific Features</h3>
        <div className="game-panel corner-decor p-4">
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li><strong className="text-[var(--text-primary)]">Pause in Single-Player:</strong> Added in Update 5 — you can now pause when playing solo, great for portable play.</li>
            <li><strong className="text-[var(--text-primary)]">Text Size Adjustment:</strong> Added in Update 5 — increase text size for better readability on the small screen.</li>
            <li><strong className="text-[var(--text-primary)]">Shader Pre-Compilation:</strong> Moved to game start in Update 5 — longer initial load but much less in-game stuttering.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Linux Dedicated Server Warning</h3>
        <InfoBox title="Linux Not Officially Supported" type="warning">
          Enshrouded does <strong>NOT officially support Linux</strong> dedicated servers. While Wine/Proton can make it work, many users report massive issues. If experiencing problems on Linux VMs or cloud hosting, consider switching to native Windows hosting.
        </InfoBox>
        <FixCard title="Linux Server Workarounds" steps={[
          "Use Proton Experimental or GE-Proton for best compatibility.",
          "Ensure all required libraries are installed.",
          "Use SteamCMD with Proton prefix.",
          "Monitor memory usage carefully — Linux Proton overhead is higher.",
          "If persistent issues: Switch to Windows Server for hosting."
        ]} />
      </div>
    ),
  },
  {
    id: 'server-setup',
    title: 'Dedicated Server Guide',
    icon: <Server className="w-5 h-5" />,
    summary: 'Complete dedicated server setup, configuration, port forwarding, RAM requirements, and troubleshooting.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Running a dedicated Enshrouded server requires specific hardware and configuration. This guide covers setup, optimization, and common server-specific issues.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Server Requirements</h3>
        <div className="game-panel corner-decor p-4">
          <table className="w-full text-xs text-[var(--text-secondary)]">
            <thead>
              <tr className="text-[var(--text-gold)] font-cinzel">
                <th className="text-left pb-2">Component</th>
                <th className="text-left pb-2">Minimum</th>
                <th className="text-left pb-2">Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-1">CPU</td><td>4 cores @ 3.0GHz</td><td>6+ cores @ 4.0GHz</td></tr>
              <tr><td className="py-1">RAM</td><td>8GB DDR4</td><td>16GB DDR4 (add 1GB per 2 players above 8)</td></tr>
              <tr><td className="py-1">Storage</td><td>20GB SSD</td><td>50GB NVMe SSD</td></tr>
              <tr><td className="py-1">Network</td><td>100Mbps</td><td>1Gbps (upload critical)</td></tr>
            </tbody>
          </table>
          <p className="text-[10px] text-[var(--text-muted)] mt-2">Note: Single-thread performance is crucial for Enshrouded servers.</p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Configuration File</h3>
        <p className="text-xs text-[var(--text-secondary)] mb-3">The server config is in <code>enshrouded_server.json</code>. Common mistakes:</p>
        <FixCard title="Common Config Errors" steps={[
          "<strong>No trailing commas</strong> after the last item in arrays/objects.",
          "<strong>Use double quotes</strong> for all strings — single quotes break JSON.",
          "<strong>IP must be 0.0.0.0</strong> — not your local or public IP.",
          "<strong>reservedSlots must be &gt; 0</strong> — a value of 0 prevents ALL connections.",
          "Validate your JSON at <code>jsonlint.com</code> before uploading."
        ]} />

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Firewall Configuration</h3>
        <div className="game-panel corner-decor p-4">
          <p className="text-[10px] text-[var(--text-gold)] font-cinzel mb-2">Windows Firewall Commands (Run as Admin in PowerShell):</p>
          <code className="block text-[10px] text-[var(--text-secondary)] bg-[var(--bg-panel)] p-2 rounded mb-2">
            New-NetFirewallRule -DisplayName "Enshrouded Game" -Direction Inbound -Protocol UDP -LocalPort 15636 -Action Allow<br/>
            New-NetFirewallRule -DisplayName "Enshrouded Query" -Direction Inbound -Protocol UDP -LocalPort 15637 -Action Allow<br/>
            New-NetFirewallRule -DisplayName "Steam Query" -Direction Inbound -Protocol UDP -LocalPort 27015 -Action Allow
          </code>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Server Performance Tips</h3>
        <FixCard title="Optimization Strategies" steps={[
          "Schedule automatic restarts every 8-12 hours (Enshrouded has known memory leaks).",
          "Group players together — 16 players in 16 different biomes = 16x server load.",
          "Reduce slotCount in config if server shows 'Overloaded' at low usage.",
          "Use a unique server name — generic names get buried in the browser list.",
          "Ensure 10GB+ free disk space at all times.",
          "For post-November 2024 update performance issues: These are engine-level — no server hardware can fully eliminate them until Keen Games releases a fix."
        ]} />
      </div>
    ),
  },
  {
    id: 'common-errors',
    title: 'Common Error Codes',
    icon: <Bug className="w-5 h-5" />,
    summary: 'Specific error messages, what they mean, and step-by-step fixes for each known error.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          This section catalogs every known error message in Enshrouded with specific fixes for each. If you see an error code or message not listed here, check the official Keen Games support page.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Launch Errors</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">"Graphics System Couldn't Be Initialized"</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Causes: Outdated Vulkan, integrated GPU conflict, missing GPU drivers.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Install latest Vulkan runtime → Disable integrated GPU → Update GPU drivers. See Launch & Crash Fixes section.</p>
        </div>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">"No Compatible Graphics Device Found" / "Could not create vulkan device"</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Cause: GPU doesn't meet minimum Vulkan requirements or drivers are severely outdated.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Update GPU drivers → Install latest Vulkan SDK → Ensure discrete GPU is active. Intel HD/UHD iGPUs are NOT supported.</p>
        </div>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">"enshrouded.exe has crashed — A MiniDump has been created"</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Causes: ReShade Vulkan layer, ASUS GPU Tweak III, GPU overclock, corrupted shaders.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Delete Vulkan ImplicitLayers registry → Close ASUS GPU Tweak III → Disable GPU overclock → Clear shader cache.</p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Connection Errors</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">"Game Creation Failed" (Error 5)</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Causes: reservedSlots=0, corrupted save, disk full, version mismatch.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Set reservedSlots &gt; 0 → Check disk space (10GB+ free) → Restore from backup → Update server.</p>
        </div>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">"Your Version Is Too Old"</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Cause: Server hasn't been updated after a game patch.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Restart server (managed hosts auto-update) → Self-hosted: run app_update 2278520 in SteamCMD → Verify game files.</p>
        </div>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">"Connection Timed Out"</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Causes: Server not fully loaded, NAT loopback issue, port forwarding wrong, firewall blocking.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Wait 2 minutes after server start → Test from outside your network → Check port forwarding → Check firewall rules → Restart router.</p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">In-Game Errors</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">"Server Overloaded"</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Causes: Memory leak, too many players spread across biomes, insufficient RAM.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Schedule server restart → Group players together → Increase RAM allocation → Reduce slotCount in config.</p>
        </div>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">Shader Compilation Crash</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Cause: Corrupted shader cache or 13th/14th Gen Intel CPU instability.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Clear shader cache → Update GPU drivers → Intel CPU: Update BIOS to latest → Set Intel Default Settings in BIOS.</p>
        </div>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">"Unreal Engine 4 Crash Reporter — Enshrouded Has Crashed"</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">The generic UE4 crash reporter. Causes vary — most commonly ReShade Vulkan layer, GPU overclock, memory issues, or corrupted config files.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Delete Vulkan ImplicitLayers registry (HKEY_LOCAL_MACHINE\SOFTWARE\Khronos\Vulkan\ImplicitLayers) → Stop GPU overclock → Increase virtual memory → Verify game files → Delete %LocalAppData%\Enshrouded\Saved\Config → Reinstall VC++ Redistributables.</p>
        </div>
        <div className="game-panel corner-decor p-4 mb-3">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">"An Unreal process has crashed: UE4-Enshrouded"</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">A fatal UE4 process crash. Often caused by Epic Games telemetry data routing conflicts.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Edit hosts file → add <code>0.0.0.0 datarouter.ol.epicgames.com datarouter-weighted.ol.epicgames.com</code> → Restart PC. Also try: run Steam as admin, delete OpenXR folder, disable fullscreen optimizations.</p>
        </div>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-xs font-bold text-orange-400 mb-2">Game Stuck on "Compiling Shaders" / Shader Compilation Freeze</h4>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Shader compilation can hang or crash on certain systems, especially with Intel 13th/14th Gen CPUs.</p>
          <p className="text-xs text-[var(--text-primary)]">Fix: Let it finish (can take 5-30 min) → Don't switch windows during compilation → Update GPU drivers → Clear GPU shader cache → Intel CPU: Update BIOS → If all else fails: add -dx11 launch option to skip Vulkan shader compilation.</p>
        </div>

        <InfoBox title="Still Having Issues?" type="tip">
          If none of these fixes resolve your problem, submit a bug report to Keen Games through their official support page: <code>https://enshrouded.zendesk.com</code>. Include your system specs, GPU model, driver version, and the exact error message. The more detail you provide, the faster they can identify and fix the issue.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'general-maintenance',
    title: 'General Maintenance',
    icon: <Wrench className="w-5 h-5" />,
    summary: 'Regular maintenance tasks, update procedures, best practices for keeping Enshrouded running smoothly.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Regular maintenance prevents most common issues. This guide covers the routine tasks every player and server admin should perform to keep Enshrouded running at its best.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Weekly Maintenance Checklist</h3>
        <div className="game-panel corner-decor p-4">
          <h4 className="font-cinzel text-[10px] font-bold text-[var(--text-gold)] mb-2">For Players</h4>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li>☐ Update GPU drivers (check monthly minimum)</li>
            <li>☐ Verify game files in Steam</li>
            <li>☐ Clear shader cache if experiencing stutter</li>
            <li>☐ Check for Windows updates</li>
            <li>☐ Ensure Steam Cloud save is enabled</li>
            <li>☐ Back up save files manually</li>
          </ul>
        </div>
        <div className="game-panel corner-decor p-4 mt-3">
          <h4 className="font-cinzel text-[10px] font-bold text-[var(--text-gold)] mb-2">For Server Admins</h4>
          <ul className="text-xs text-[var(--text-secondary)] space-y-1">
            <li>☐ Schedule automatic restarts every 8-12 hours</li>
            <li>☐ Download savegame backups weekly</li>
            <li>☐ Check server logs for errors</li>
            <li>☐ Update server after game patches</li>
            <li>☐ Monitor disk space (keep 10GB+ free)</li>
            <li>☐ Verify firewall rules are still active</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">After Game Updates</h3>
        <FixCard title="Post-Update Procedure" steps={[
          "<strong>Always restart your server</strong> before trying to connect after a patch.",
          "Verify game files after major updates (Steam → Properties → Installed Files → Verify).",
          "Check key bindings — major updates (like Update 8) may reset or change them.",
          "Review skill tree after major updates — some updates refund all skill points.",
          "Check for new settings options in the graphics/audio menus.",
          "If mods are installed: Disable them until updated for the new patch."
        ]} />

        <InfoBox title="Pro Tip: Create a System Restore Point" type="tip">
          Before major game updates, create a Windows System Restore Point. If an update causes issues, you can roll back your system to the pre-update state. Also, always back up your save files before updates — while rare, updates can occasionally cause save compatibility issues.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'update8-migration',
    title: 'Update 8 Migration Issues',
    icon: <ArrowUpCircle className="w-5 h-5" />,
    summary: 'Problems that hit returning players after Forging the Path — missing skill points, weaker armor, lost equipment, changed keybinds, flooded bases, and shader stutter.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Update 8 reworked so many systems that returning players hit a specific set of "is my save broken?" moments. Almost all of them are intentional changes or already-patched bugs — here is how to tell which is which.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">"All My Skill Points Are Gone"</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Not a bug.</strong> Every character's skill tree was automatically reset on first login after Update 8, with all points refunded for the reworked tree. Re-spend them before fighting — and note the tree itself changed, so your old build path may not exist anymore. Double Jump is now in the center of the tree.
          </p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">"My Armor Got Weaker"</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Intentional.</strong> Base armor values were lowered slightly in Update 8 — the protection comes back (and exceeds old values) once you upgrade pieces with Runes at the Blacksmith/Huntress/Alchemist. Old gear was auto-converted to the upgrade system; nothing was downgraded permanently.
          </p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">"Equipment Disappeared After Updating"</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Was a real bug — fixed in Hotfix #39.</strong> In very large item collections, some items failed to convert to upgradable versions. If you lost gear in the first days after the patch, update to the latest hotfix and check your chests again. Report persistent losses on the official support channels with your save files.
          </p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">"My Base Is Flooding / Water Behaves Differently"</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)]">
            Update 8 let water spread more freely on flat surfaces and made sprinklers work regardless of distance. <strong className="text-[var(--text-primary)]">Existing bases may need additional drains</strong> — the patch notes explicitly warn about this. Emergency fix: the Flame Altar flood-protection button removes all simulated water in your base radius.
          </p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">"Keybinds / Menus Feel Wrong"</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)]">
            New default menu buttons and camera settings only apply to <strong className="text-[var(--text-primary)]">new save games</strong> — existing saves keep old defaults, so two players on different saves can have different behavior. Check Settings: Automatic Camera Rotation (off for mouse/keyboard, on for controllers), two Target Selection modes, and the new slow-walk toggle on [u].
          </p>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">"Stuttering Got Worse After a Hotfix"</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <p className="text-xs text-[var(--text-secondary)]">
            Hotfix #41 touched many VFX files — <strong className="text-[var(--text-primary)]">shader compilation takes longer than usual after it</strong>, causing temporary stutter that resolves as shaders cache. Hotfix #42 explicitly required no shader recompilation. If stutter persists beyond a session, verify game files.
          </p>
        </div>

        <InfoBox title="The 'What's New' Popup" type="tip">
          Loading an old save after Update 8 shows a popup summarizing the important changes. Dismissed it too fast? It can be reopened anytime via the "What's New" link in the ESC/system menu — read it before assuming something is broken.
        </InfoBox>
      </div>
    ),
  },
  {
    id: 'quest-progression-fixes',
    title: 'Stuck Quests & Character Fixes',
    icon: <ScrollText className="w-5 h-5" />,
    summary: 'Verified workarounds for broken quests, stuck characters, and blocked interactions — Treacherous Waters, the Mill floodgates, stuck-in-geometry escapes, and unopenable doors.',
    content: (
      <div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          Most "broken quest" reports have a known cause and a clean fix. These are the verified ones — including several that were fixed in patches specifically because players got stuck.
        </p>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-4 mb-3">Known Quest Fixes (Official)</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Treacherous Waters:</strong> Was genuinely broken for some players. The Update 8 fix: the quest <strong className="text-[var(--text-gold)]">disappears from your journal and can be started fresh</strong> — if it vanished, that was the repair, not a new bug.</li>
            <li><strong className="text-[var(--text-primary)]">The Alchemist's Mortar:</strong> Received extra safeguards in Update 8 so it always continues — update if you are stuck on an old version.</li>
            <li><strong className="text-[var(--text-primary)]">Vorgoth's Note 1:</strong> Now correctly added to the journal when collected (was silently failing).</li>
            <li><strong className="text-[var(--text-primary)]">Obtaining a Mill:</strong> If the quest does not update after closing the floodgates, <strong className="text-[var(--text-gold)]">reopen and reclose all three gates</strong> — a known quirk with a one-minute workaround.</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Character Stuck in Geometry</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Automatic rescue:</strong> Since Update 8 the game detects when you are wedged between collisions and unable to move — it lets you walk or jump to free yourself</li>
            <li><strong className="text-[var(--text-primary)]">Inside a solid wall:</strong> You are teleported to your <strong className="text-[var(--text-gold)]">last activated save point or Flame Altar</strong> (no longer all the way back to the Cinder Vault)</li>
            <li><strong className="text-[var(--text-primary)]">Green goo pits:</strong> Jump cost from green goo was reduced to zero — you can simply jump out</li>
            <li><strong className="text-[var(--text-primary)]">Falling forever:</strong> Fast-travel mid-fall was removed as an escape hatch; if the auto-rescue fails, exit to main menu and reload — you respawn at your last save point</li>
            <li><strong className="text-[var(--text-primary)]">Stuck in the Flame Temple spawn room:</strong> Restart the game — a known rare issue with a simple fix</li>
          </ul>
        </div>

        <h3 className="font-cinzel text-sm font-bold text-[var(--text-gold)] tracking-wider uppercase mt-6 mb-3">Blocked Interactions</h3>
        <div className="game-panel corner-decor p-4 mb-3">
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">Door won't open (tombstone/survivor in the way):</strong> Point at the <strong className="text-[var(--text-gold)]">door frame or the door itself</strong> instead of the blocking object — the interaction prompt now appears (fixed in Update 8)</li>
            <li><strong className="text-[var(--text-primary)]">Ladder through the floor:</strong> Interacting with ladders through solid ground used to wedge players in terrain — patched; update if encountered</li>
            <li><strong className="text-[var(--text-primary)]">Building blocks lost their remove option:</strong> Happened when too many shapes were placed in a small area — fixed in Update 8; if it recurs, dismantle a different block nearby first</li>
            <li><strong className="text-[var(--text-primary)]">Locked doors/chests:</strong> Now display how many lockpicks/items are required — no more guessing</li>
          </ul>
        </div>

        <InfoBox title="Before You Report a Bug" type="warning">
          1) Update to the latest hotfix — many quest and interaction bugs were fixed in Hotfixes #37–42. 2) Check the "What's New" popup (ESC menu) — half of all post-patch "bugs" are intentional changes. 3) Search the official Feature Upvote megathreads — if it's real, someone else already hit it and Keen Games tracks there.
        </InfoBox>
      </div>
    ),
  },
];
