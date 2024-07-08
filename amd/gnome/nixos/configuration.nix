# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running ‘nixos-help’).

{ config, lib, pkgs, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
      ./hardware-configuration.nix
    ];

  # Bootloader.
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  # --- ntfs support
  boot.supportedFilesystems = [ "ntfs" ];

  # --- AMD GPU
  boot.initrd.kernelModules = [ "amdgpu" ]; # use amd early

  # --- Latest Linux kernel
  boot.kernelPackages = pkgs.linuxPackages_latest;
  # boot.extraModulePackages = with config.boot.kernelPackages; [ wireguard ]; # possible wireguard for vpn setup later
  
  networking.hostName = "nixos"; # Define your hostname.
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Enable networking
  networking.networkmanager.enable = true;

  # Set your time zone.
  time.timeZone = "Europe/Berlin";

  # Select internationalisation properties.
  i18n.defaultLocale = "en_US.UTF-8";

  i18n.extraLocaleSettings = {
    LC_ADDRESS = "de_DE.UTF-8";
    LC_IDENTIFICATION = "de_DE.UTF-8";
    LC_MEASUREMENT = "de_DE.UTF-8";
    LC_MONETARY = "de_DE.UTF-8";
    LC_NAME = "de_DE.UTF-8";
    LC_NUMERIC = "de_DE.UTF-8";
    LC_PAPER = "de_DE.UTF-8";
    LC_TELEPHONE = "de_DE.UTF-8";
    LC_TIME = "de_DE.UTF-8";
  };

  # Enable the X11 windowing system.
  services.xserver.enable = true;
  services.xserver.videoDrivers = [ "amdgpu" ]; # AMDGPU
  # Enable the GNOME Desktop Environment.
  services.xserver.displayManager.gdm.enable = true;
  services.xserver.desktopManager.gnome.enable = true;

  # Configure keymap in X11
  services.xserver = {
    layout = "de";
    xkbVariant = "";
  };

  # Configure console keymap
  console.keyMap = "de";

  # Enable CUPS to print documents.
  services.printing.enable = true;

  # Enable sound with pipewire.
  sound.enable = true;
  hardware.pulseaudio.enable = false;
  security.rtkit.enable = true;
  services.pipewire = {
    enable = true;
    alsa.enable = true;
    alsa.support32Bit = true;
    pulse.enable = true;
    # If you want to use JACK applications, uncomment this
    jack.enable = true;

    # use the example session manager (no others are packaged yet so this is enabled by default,
    # no need to redefine it in your config for now)
    #media-session.enable = true;
  };

  # Enable touchpad support (enabled default in most desktopManager).
  # services.xserver.libinput.enable = true;

  # Define a user account. Don't forget to set a password with ‘passwd’.
  users.users.dabs = {
    isNormalUser = true;
    description = "dabs";
    extraGroups = [ "networkmanager" "wheel" ];
    shell = pkgs.fish;
    packages = with pkgs; [
      firefox
      flatpak
    #  thunderbird
    ];
  };

  # --- Virtualization using VirtualBox
  virtualisation.virtualbox.host.enable = true;
  # virtualisation.virtualbox.guest.enable = true;
  #virtualisation.virtualbox.guest.x11 = true;
  users.extraGroups.vboxusers.members = [ "dabs" ]; # check with "getent group vboxusers"

  # Allow unfree packages
  nixpkgs.config.allowUnfree = true;

  # List packages installed in system profile. To search, run:
  # $ nix search wget

  # Unsafe electron for obsidian
  nixpkgs.config.permittedInsecurePackages = [
    "electron-25.9.0"
  ];

  
  fonts.packages = with pkgs; [
    noto-fonts
    noto-fonts-cjk
    noto-fonts-emoji
    liberation_ttf
    fira-code
    fira-code-symbols
    mplus-outline-fonts.githubRelease
    dina-font
    proggyfonts
  ];

  
  environment.systemPackages = with pkgs; [
    # shells
    fish
    # terminals
    tmux
    alacritty
    kitty
    # Commandline Utilities
    lf # inspired by ranger
    lshw # listing hardware
    git
    gh
    neovim
    helix
    wl-clipboard
    xclip
    neofetch
    tree
    unzip
    htop
    lm_sensors # hardware sensors lile cpu temperature - use with: sensors-detect
    # Development Programming Languages
    python3
    #clang
    gcc
    gnumake
    cmake
    go
    rustup
    zig
    # java stuff
    jdk8
    maven # package manager
    # Additional Packets
    # Raylib
    raylib
    # Language Servers
    zls
    gopls
    vscode-langservers-extracted
    vimPlugins.nvim-jdtls # java
    jdt-language-server # java
    # IDEs / Editors
    vscode
    jetbrains.clion
    jetbrains.goland
    jetbrains.idea-ultimate
    jetbrains.rider
    jetbrains.pycharm-professional   #jetbrains.pycharm-community
    eclipses.eclipse-java
    # Development packages
    raylib
    wayland-protocols
    # gnome
    gnome.gnome-terminal
    gnome.gnome-tweaks
    gnome.gnome-keyring
    gnome-extension-manager
    # drivers
    ntfs3g # linux ntfs driver
    # Office
    onlyoffice-bin
    #Browsers
    brave
    chromium
    # GUI Software
    github-desktop
    discord
    thunderbird
    obsidian
    # Gaming
    steam
    protonup-qt
    # Streaming and Editing
    obs-studio
    gimp
    blender
    # audio
    jamesdsp
  ];

  # --- Program Configurations
  
  # Some programs need SUID wrappers, can be configured further or are
  # started in user sessions.
  # programs.mtr.enable = true;
  # programs.gnupg.agent = {
  #   enable = true;
  #   enableSSHSupport = true;
  # };

  programs.fish.enable = true;

  # Steam
  programs.steam = {
    enable = true;
    remotePlay.openFirewall = true; # Open ports in the firewall for Steam Remote Play
    dedicatedServer.openFirewall = true; # Open ports in the firewall for Source Dedicated Server
  };
	
  nixpkgs.config.allowUnfreePredicate = pkg: builtins.elem (lib.getName pkg) [
    "steam"
    "steam-original"
    "steam-run"
  ];


  # --- Services ---
  services.fwupd.enable = true; # for firmware updates: fwupdmgr get-devices, refresh, get-updates, update
  services.flatpak.enable = true;  
    
      
        
  # Enable the OpenSSH daemon.
  # services.openssh.enable = true;

  # Open ports in the firewall.
  # networking.firewall.allowedTCPPorts = [ ... ];
  # networking.firewall.allowedUDPPorts = [ ... ];
  # Or disable the firewall altogether.
  # networking.firewall.enable = false;

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It‘s perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = "23.11"; # Did you read the comment?

}
