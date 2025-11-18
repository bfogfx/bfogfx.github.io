# BFO GFX - Premium Hip Hop CD Cover Designs Website

## Overview

This is a fully responsive website for BFO GFX, featuring a dynamic gallery of CD covers with an admin panel for easy management.

## Features

- **Responsive Design:** Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Gallery:** CD covers are loaded from a JSON data file
- **Admin Panel:** Easy-to-use interface to manage and delete CD covers
- **Lightbox Feature:** Click any CD cover to view a larger version
- **Gritty Aesthetic:** Dark, vintage background with purple and green accents
- **Mobile Optimized:** 2-column layout on mobile, 4-column on desktop

## File Structure

```
bfo-gfx-redesign/
├── index.php              # Main website (dynamic)
├── admin.php              # Admin panel for managing covers
├── style.css              # Styling
├── script.js              # JavaScript functionality
├── data/
│   └── covers.json        # CD cover data (JSON format)
├── assets/
│   ├── logo.png           # BFO GFX logo
│   ├── hero-title.png     # Hero section title image
│   ├── pricing-info.png   # Pricing information image
│   ├── gritty-background.jpg # Page background
│   └── covers/            # CD cover images
│       ├── cover-1.jpg
│       ├── cover-2.jpg
│       └── ... (up to cover-16.jpg)
└── README.md              # This file
```

## Setup Instructions

### 1. Upload Files to Your Server

Upload all files to your web server using FTP or your hosting control panel. Ensure your server supports PHP.

### 2. Set Permissions

Make sure the following directories are writable:
- `data/` (for JSON file updates)
- `assets/covers/` (for uploading new covers)

```bash
chmod 755 data/
chmod 755 assets/covers/
```

### 3. Access the Website

- **Main Website:** `https://yoursite.com/index.php` (or just `https://yoursite.com/`)
- **Admin Panel:** `https://yoursite.com/admin.php`

## Admin Panel

### Login Credentials

**Default credentials (CHANGE THESE IMMEDIATELY):**
- Username: `admin`
- Password: `bfogfx2024`

### To Change Credentials

Edit `admin.php` and find these lines:

```php
define('ADMIN_USER', 'admin');
define('ADMIN_PASS', 'bfogfx2024');
```

Replace with your desired username and password.

### Managing CD Covers

#### Deleting Covers

1. Log in to the admin panel
2. Find the cover you want to delete
3. Click the "Delete" button
4. Confirm the deletion

#### Adding New Covers

1. Upload your cover image file to the `assets/covers/` directory via FTP
2. Edit the `data/covers.json` file
3. Add a new entry with the next available ID:

```json
{
  "id": 17,
  "filename": "cover-17.jpg",
  "title": "My New CD Cover"
}
```

4. Save the file
5. The new cover will appear on your website and in the admin panel

## Customization

### Changing Colors

Edit `style.css` and look for the CSS variables section:

```css
:root {
    --color-green-bright: #b8d97f;
    --color-green-faded: #a8c98a;
    --color-purple-nav: #7c5375;
    --color-white-bold: #f5f5f5;
    --color-text-primary: #e8e8e8;
    --color-bg-dark: #0a0a0a;
}
```

### Changing Navigation Links

Edit `index.php` in the `<nav>` section:

```html
<nav class="nav-bar">
    <a href="#home" class="nav-link">HOME</a>
    <a href="#about" class="nav-link">ABOUT US</a>
    <!-- Add or modify links here -->
</nav>
```

### Changing Background Image

Replace `assets/gritty-background.jpg` with your own background image, or edit `style.css` to point to a different file.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Admin Panel Shows Blank Page

- Ensure your server has PHP enabled
- Check that `data/covers.json` exists and is readable
- Verify file permissions are correct

### Covers Not Displaying

- Ensure cover images are in the `assets/covers/` directory
- Check that filenames in `data/covers.json` match the actual filenames
- Verify file permissions on the covers directory

### Lightbox Not Working

- Ensure `script.js` is loaded correctly
- Check browser console for JavaScript errors
- Verify that image paths are correct

## Support & Customization

For additional customization or support, contact your web developer.

## License

This website design is proprietary to BFO GFX. All rights reserved.
