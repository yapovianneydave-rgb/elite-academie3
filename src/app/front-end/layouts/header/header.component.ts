import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // État des dropdowns
  isSearchOpen = false;
  isMessageOpen = false;
  isNotifOpen = false;
  isProfileOpen = false;

  // Recherche
  searchQuery = '';

  // Données utilisateur
  currentUser = {
    name: 'Nik Jone',
    avatar: '/assets/images/user/1.jpg',
    status: 'Available'
  };

  // Messages (mock)
  messages = [
    { id: 1, name: 'Nik Emma Watson', text: 'Hello, how are you?', date: '13 Jun', avatar: '/assets/images/user/01.jpg', unread: true },
    { id: 2, name: 'Lorem Ipsum Watson', text: 'Can we meet tomorrow?', date: '20 Apr', avatar: '/assets/images/user/02.jpg', unread: true },
    { id: 3, name: 'Why do we use it?', text: 'Project update needed', date: '30 Jun', avatar: '/assets/images/user/03.jpg', unread: true },
    { id: 4, name: 'Variations Passages', text: 'Thanks for the help!', date: '12 Sep', avatar: '/assets/images/user/04.jpg', unread: false },
    { id: 5, name: 'Lorem Ipsum generators', text: 'New file shared', date: '5 Dec', avatar: '/assets/images/user/05.jpg', unread: false }
  ];

  // Notifications (mock)
  notifications = [
    { id: 1, title: 'New Order Received', text: 'Lorem is simply', time: '23 hrs ago', icon: 'ri-shopping-bag-line', color: 'primary', unread: true },
    { id: 2, title: 'Emma Watson Nik', text: '95 MB file uploaded', time: 'Just Now', avatar: '/assets/images/user/01.jpg', unread: true },
    { id: 3, title: 'New customer is join', text: 'Jond Nik registered', time: '5 days ago', avatar: '/assets/images/user/02.jpg', unread: true },
    { id: 4, title: 'Updates Available', text: '120 MB update ready', time: 'Just Now', icon: 'ri-download-cloud-line', color: 'success', unread: false }
  ];

  constructor(private router: Router, private eRef: ElementRef) {}

  ngOnInit(): void {}

  // Fermer les dropdowns quand on clique ailleurs
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeAllDropdowns();
    }
  }

  closeAllDropdowns(): void {
    this.isSearchOpen = false;
    this.isMessageOpen = false;
    this.isNotifOpen = false;
    this.isProfileOpen = false;
  }

  // Toggle Search
  toggleSearch(): void {
    this.closeAllDropdowns();
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) {
      setTimeout(() => {
        const input = document.querySelector('.search-input') as HTMLInputElement;
        input?.focus();
      }, 100);
    }
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Recherche:', this.searchQuery);
      // this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
      this.searchQuery = '';
      this.isSearchOpen = false;
    }
  }

  // Toggle Messages
  toggleMessages(): void {
    this.isMessageOpen = !this.isMessageOpen;
    this.isNotifOpen = false;
    this.isProfileOpen = false;
  }

  get unreadMessagesCount(): number {
    return this.messages.filter(m => m.unread).length;
  }

  openMessage(msg: any): void {
    msg.unread = false;
    console.log('Ouvrir message:', msg.id);
    // this.router.navigate(['/chat', msg.id]);
  }

  // Toggle Notifications
  toggleNotifications(): void {
    this.isNotifOpen = !this.isNotifOpen;
    this.isMessageOpen = false;
    this.isProfileOpen = false;
  }

  get unreadNotifsCount(): number {
    return this.notifications.filter(n => n.unread).length;
  }

  openNotification(notif: any): void {
    notif.unread = false;
    console.log('Ouvrir notification:', notif.id);
  }

  // Toggle Profile
  toggleProfile(): void {
    this.isProfileOpen = !this.isProfileOpen;
    this.isMessageOpen = false;
    this.isNotifOpen = false;
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
    this.closeAllDropdowns();
  }

  editProfile(): void {
    this.router.navigate(['/profile-edit']);
    this.closeAllDropdowns();
  }

  accountSettings(): void {
    this.router.navigate(['/account-setting']);
    this.closeAllDropdowns();
  }

  privacySettings(): void {
    this.router.navigate(['/privacy-setting']);
    this.closeAllDropdowns();
  }

  logout(): void {
    localStorage.removeItem('token');
    sessionStorage.clear();

    this.closeAllDropdowns();

    this.router.navigate(['/auth/login']);
  }


  toggleFullscreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}
