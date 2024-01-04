import { Component, OnInit } from '@angular/core';
declare const TradingView: any;

@Component({
  selector: 'app-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.scss'],
})
export class TradingviewComponent implements OnInit {
  ngOnInit(): void {
    new TradingView.widget({
      width: window.screen.width * 0.6,
      height: 500,
      symbol: 'FX:EURUSD',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'light',
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      allow_symbol_change: true,
      gridColor: 'rgba(0, 0, 0, 0.06)',
      hide_legend: true,
      withdateranges: true,
      hide_side_toolbar: false,
      save_image: false,
      watchlist: [
        'FX:EURUSD',
        'FX:GBPUSD',
        'USDJPY',
        'FX:USDCHF',
        'FX:USDCAD',
        'FX:AUDUSD',
        'FX:NZDUSD',
      ],
      container_id: 'tradingview_73778',
    });
  }
}
