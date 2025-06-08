import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  categories = [
    'Living room', 'Master Bedroom', 'Balcony', 'Wardrobe',
    'Modular Kitchen', "Kid's Bedroom", 'TV Unit Designs', 'Pooja Room', 'False Ceiling Designs'
  ];

  allDesigns = [
    {
      category: 'Living room',
      title: 'Modern Living Room Design with White Sofa and Red-Striped Armchair',
      size: '14x12 feet',
      image: 'living1.avif',
    },
    {
      category: 'Living room',
      title: 'Contemporary Living Room Desigfn with3-Seater Blue Sofa',
      size: '14x12 feet',
      image: 'living2.avif',
    },
    {
      category: 'Living room',
      title: 'Modern Living Room Design with TV Storage and Sectional Sofa',
      size: '14x12 feet',
      image: 'living3.avif',
    },
    {
      category: 'Living room',
      title: 'Modern Living Room Design With Charcoal L-Shaped Sofa',
      size: '14x16 feet',
      image: 'living4.avif',
    },
    {
      category: 'Living room',
      title: 'Modern Living Room Design with Green Walls and Open Shelving',
      size: '12x12 feet',
      image: 'living5.avif',
    },
    {
      category: "Kid's Bedroom",
      title: 'Modern Kids Bedroom Design With Wardrobes and Floating Desk',
      size: '14x10 feet',
      image: 'kid1.avif',
    },
    {
      category: "Kid's Bedroom",
      title: 'Contemporary Kids Bedroom Design With Twin Beds and Reading Nook',
      size: '16x12 feet',
      image: 'kid2.avif',
    },
    {
      category: "Kid's Bedroom",
      title: 'Contemporary Kids Bedroom Design with Lavender Study Nook',
      size: '12x14 feet',
      image: 'kid3.avif',
    },
    {
      category: "Kid's Bedroom",
      title: 'Modern Kids Bedroom Design with Low-Profile Upholstered Bed',
      size: '12x14 feet',
      image: 'kid4.avif',
    },
    {
      category: "Kid's Bedroom",
      title: 'Modern Kids Bedroom Design with Twin Upholstered Beds',
      size: '12x14 feet',
      image: 'kid5.avif',
    },
    {
      category: 'Master Bedroom',
      title: 'Contemporary Master Bedroom Design with Geometric Wall',
      size: '15x16 feet',
      image: 'master1.avif',
    },
    {
      category: 'Master Bedroom',
      title: 'Modern Master Bedroom Design With Deep Forest Green Accent Wall',
      size: '12x14 feet',
      image: 'master2.avif',
    },
    {
      category: 'Master Bedroom',
      title: 'Contemporary Master Bedroom Design Upholstered Platform Bed',
      size: '13x15 feet',
      image: 'master3.avif',
    },
    {
      category: 'Master Bedroom',
      title: 'Contemporary Master Bedroom Design with Ottoman Bench and Queen Bed',
      size: '12x12 feet',
      image: 'master4.avif',
    },
    {
      category: 'Master Bedroom',
      title: 'Classic Green Master Bedroom Design with Chaise Lounge',
      size: '15x14 feet',
      image: 'master5.avif',
    },
    {
      category: 'Pooja Room',
      title: 'Floor-Mounted Modern Pooja Unit Design in Silver Frost Finish',
      size: '6x2x9 feet',
      image: 'pooja1.avif',
    },
    {
      category: 'Pooja Room',
      title: 'Modern Wall-Mounted Pooja Unit Design with Ganesha Mural',
      size: '3x1x1 feet',
      image: 'pooja2.avif',
    },
    {
      category: 'Pooja Room',
      title: 'White Contemporary Pooja Unit Design with Golden Bells and Arch',
      size: '3x1x7 feet',
      image: 'pooja3.avif',
    },
    {
      category: 'Pooja Room',
      title: 'Contemporary Frosty White Pooja Room Design',
      size: '6x6 feet',
      image: 'pooja4.avif',
    },
    {
      category: 'Pooja Room',
      title: 'Modern Pooja Unit Design with Circular Backdrop',
      size: '5x1x1.5 feet',
      image: 'pooja5.avif',
    },
    {
      category: 'Balcony',
      title: 'Boho Balcony Design With Hanging Chair and Woven Rug',
      size: '5x12 feet',
      image: 'balcony1.avif',
    },
    {
      category: 'Balcony',
      title: 'Modern Balcony Design With Wire Chair and Wooden Planters',
      size: '5x14 feet',
      image: 'balcony2.avif',
    },
    {
      category: 'Balcony',
      title: 'Rustic Balcony Design With Yellow Cushioned Bench and Brick Wall',
      size: '5x16 feet',
      image: 'balcony3.avif',
    },
    {
      category: 'Balcony',
      title: 'Rustic Balcony Design With Slatted Wall, Lights, and Built-in Seating',
      size: '8x12 feet',
      image: 'balcony4.avif',
    },
    {
      category: 'Balcony',
      title: 'Scandinavian Balcony Design with Wooden Grooved Panel Wall',
      size: '5x8 feet',
      image: 'balcony5.avif',
    },
    {
      category: 'TV Unit Designs',
      title: 'Contemporary White TV Unit Design With Wooden Divider',
      size: '4.6x1x1 feet',
      image: 'tv1.avif',
    },
    {
      category: 'TV Unit Designs',
      title: 'Wall-Mounted Beige Contemporary TV Unit Design With Marble Frame',
      size: '6x1.6x6 feet',
      image: 'tv2.avif',
    },
    {
      category: 'TV Unit Designs',
      title: 'Two-Toned Wall Contemporary TV Unit Design in Copperworks and Argent Acacia',
      size: '6x1.6x7 feet',
      image: 'tv3.avif',
    },
    {
      category: 'TV Unit Designs',
      title: 'Industrial Matte Black TV Unit Design with Vertical Slats and Concealed Cabinets',
      size: '9x1.6x7 feet',
      image: 'tv4.avif',
    },
    {
      category: 'TV Unit Designs',
      title: 'Contemporary TV Unit Design with Crystal Chandelier',
      size: '10x1.6x8 feet',
      image: 'tv5.avif',
    },
    {
      category: 'Wardrobe',
      title: '2-Door Modern Swing Wardrobe Design in Trooper With Gold Handles',
      size: '3x2x9 feet',
      image: 'wardrobe1.avif',
    },
    {
      category: 'Wardrobe',
      title: '4-Door Swing Contemporary Wardrobe Design in Silver Frost Colour',
      size: ' 8x2x9 feet',
      image: 'wardrobe2.avif',
    },
    {
      category: 'Wardrobe',
      title: 'Contemporary 4-Door Swing Wardrobe Design with Mirrored Sliding Doors',
      size: '12x2x9 feet',
      image: 'wardrobe3.avif',
    },
    {
      category: 'Wardrobe',
      title: 'Contemporary 2-Door Sliding Door Wardrobe Design',
      size: '7x2x7 feet',
      image: 'wardrobe4.avif',
    },
    {
      category: 'Wardrobe',
      title: 'Contemporary Sliding Wardrobe Design in White and Oak Finish',
      size: '10x2x8 feet',
      image: 'wardrobe5.avif',
    },
    {
      category: 'Modular Kitchen',
      title: 'L-Shaped Classic Kitchen Design with Highland Green and Off White',
      size: '13x9 feet',
      image: 'k1.avif',
    },
    {
      category: 'Modular Kitchen',
      title: 'Contemporary U-Shaped Kitchen Design with Champagne and Wood Finish Cabinets',
      size: '12x7 feet',
      image: 'k2.avif',
    },
    {
      category: 'Modular Kitchen',
      title: 'Contemporary L-Shaped Kitchen Design with Glossy Cabinets and Granite Countertop',
      size: '13x9 feet',
      image: 'k3.avif',
    },
    {
      category: 'Modular Kitchen',
      title: 'Modern Parallel Kitchen Design With Glossy Cabinets in Silver Frost and Champagne',
      size: '14x9 feet',
      image: 'k4.avif',
    },
    {
      category: 'Modular Kitchen',
      title: 'Contemporary Parallel Kitchen Design with Blossom Magnolia Cabinets',
      size: '12x9 feet',
      image: 'k5.avif',
    },
    {
      category: 'False Ceiling Designs',
      title: 'Painted Square False Ceiling Design with Spot Lighting in Modern Style',
      size: '',
      image: 'f1.avif',
    },
    {
      category: 'False Ceiling Designs',
      title: 'Contemporary Double Layer Cloud Gypsum False Ceiling Design',
      size: '',
      image: 'f2.avif',
    },
    {
      category: 'False Ceiling Designs',
      title: 'Gypsum False Ceiling Design with Cove Light for Modern Spaces',
      size: '',
      image: 'f3.avif',
    },
    {
      category: 'False Ceiling Designs',
      title: 'Bohemian Square Wooden False Ceiling Design with Spot Lighting',
      size: '',
      image: 'f4.avif',
    },
    {
      category: 'False Ceiling Designs',
      title: 'Contemporary Circular False Ceiling Design with POP Finish and Spotlights',
      size: '',
      image: 'f5.avif',
    },
    
    // Add more designs with their respective categories
  ];

  categoryDescriptions: { [key: string]: string } = {
    'Living room': 'A comfortable and stylish living room is the heart of any home. Discover modern layouts, colors, and furniture setups.',
    'Bathroom': 'Bathrooms should be a perfect blend of functionality and elegance. Explore minimal, luxury, and spa-inspired bathroom ideas.',
    'Homes by Livspace': 'Curated full-home interior packages tailored to your lifestyle and budget. Explore what Livspace can do for you.',
    'Wardrobe': 'Organized wardrobes designed to fit your space and lifestyle. Sliding, hinged, walk-in — explore them all here.',
    'Study Room Designs': 'Create the perfect study environment with functional desks, ample storage, and inspiring decor ideas.',
    "Kid's Bedroom": 'Colorful and creative bedroom ideas for kids that spark imagination while offering smart storage.',
    'TV Unit Designs': 'Stylish TV units that enhance your living room’s aesthetics and functionality.',
    'Pooja Room': 'Sacred, serene pooja room designs with traditional and contemporary styles to fit your space.',
    'False Ceiling Designs': 'Transform your ceilings with stylish POP and gypsum designs for living rooms, bedrooms, and more.',
  };

  activeCategory = this.categories[0];
  filteredDesigns = this.allDesigns.filter(d => d.category === this.activeCategory);

  filterDesigns(category: string) {
    this.activeCategory = category;
    this.filteredDesigns = this.allDesigns.filter(d => d.category === category);
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -150, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 150, behavior: 'smooth' });
  }
}
