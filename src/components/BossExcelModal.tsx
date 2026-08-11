import React, { useState } from 'react';
import { X, Search, FileSpreadsheet, Save, Printer, ArrowLeft, RefreshCw } from 'lucide-react';

interface BossExcelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayKeyboardClick: () => void;
}

export const BossExcelModal: React.FC<BossExcelModalProps> = ({
  isOpen,
  onClose,
  onPlayKeyboardClick,
}) => {
  const [selectedCell, setSelectedCell] = useState('D4');
  const [formulaValue, setFormulaValue] = useState('=VLOOKUP(A4, Q3_Sales_Master!B:E, 4, FALSE)');

  if (!isOpen) return null;

  const excelRows = [
    { row: 1, a: 'PROJECT_ID', b: 'CLIENT_NAME', c: 'ALLOCATED_HOURS', d: 'REVENUE_USD', e: 'STATUS' },
    { row: 2, a: 'PRJ-9042', b: 'Global FinTech Inc', c: '180 hrs', d: '$ 45,000', e: 'IN_PROGRESS' },
    { row: 3, a: 'PRJ-8821', b: 'AeroSpace Systems', c: '220 hrs', d: '$ 62,500', e: 'ESCALATED' },
    { row: 4, a: 'PRJ-7104', b: 'Retail Tech Ltd', c: '95 hrs', d: '$ 28,000', e: '#REF!' },
    { row: 5, a: 'PRJ-6019', b: 'Logistics Core', c: '310 hrs', d: '$ 89,000', e: 'APPROVED' },
    { row: 6, a: 'PRJ-5502', b: 'HealthCare AI', c: '140 hrs', d: '$ 38,200', e: 'IN_REVIEW' },
    { row: 7, a: 'PRJ-4091', b: 'E-Commerce Giant', c: '410 hrs', d: '$ 115,000', e: 'OVERTIME' },
    { row: 8, a: 'TOTAL', b: 'Sum (6 Accounts)', c: '1,355 hrs', d: '$ 377,700', e: '=SUM(D2:D7)' },
  ];

  const handleCellClick = (cellName: string, value: string) => {
    onPlayKeyboardClick();
    setSelectedCell(cellName);
    setFormulaValue(value);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col font-mono text-slate-900 select-none overflow-hidden animate-in fade-in duration-200">
      
      {/* Top Excel Window Title Bar */}
      <div className="bg-[#107c41] text-white px-4 py-2 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <FileSpreadsheet className="w-5 h-5 text-white animate-pulse" />
          <span className="text-xs font-bold tracking-wide">
            Q3_Executive_Project_Financials_v14_FINAL_v2.xlsx - Microsoft Excel
          </span>
          <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">
            Emergency Boss Key Active
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 px-3 py-1 rounded bg-slate-100 hover:bg-white text-slate-900 font-bold text-xs transition-all shadow"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Exit Boss Key (Esc)</span>
        </button>
      </div>

      {/* Excel Ribbon Bar */}
      <div className="bg-[#f3f2f1] border-b border-slate-300 p-2 flex items-center gap-4 text-xs font-sans text-slate-700 overflow-x-auto">
        <div className="flex items-center gap-1 border-r border-slate-300 pr-3">
          <Save className="w-4 h-4 cursor-pointer hover:text-green-700" />
          <Printer className="w-4 h-4 cursor-pointer hover:text-green-700" />
          <RefreshCw className="w-4 h-4 cursor-pointer hover:text-green-700" />
        </div>
        <div className="flex items-center gap-3 font-semibold">
          <span className="text-[#107c41] border-b-2 border-[#107c41] pb-0.5 cursor-pointer">Home</span>
          <span className="hover:text-slate-900 cursor-pointer">Insert</span>
          <span className="hover:text-slate-900 cursor-pointer">Page Layout</span>
          <span className="hover:text-slate-900 cursor-pointer">Formulas</span>
          <span className="hover:text-slate-900 cursor-pointer">Data</span>
          <span className="hover:text-slate-900 cursor-pointer">Review</span>
          <span className="hover:text-slate-900 cursor-pointer">View</span>
        </div>
      </div>

      {/* Formula Bar */}
      <div className="bg-white border-b border-slate-300 px-3 py-1.5 flex items-center gap-3 text-xs font-mono">
        <div className="w-12 px-2 py-0.5 bg-slate-100 border border-slate-300 text-center font-bold text-slate-700">
          {selectedCell}
        </div>
        <span className="text-slate-400 font-bold italic">fx</span>
        <input
          type="text"
          value={formulaValue}
          onChange={(e) => setFormulaValue(e.target.value)}
          className="flex-1 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-xs text-slate-900 focus:outline-none focus:border-green-600 font-mono"
        />
      </div>

      {/* Main Grid View */}
      <div className="flex-1 overflow-auto bg-white">
        <table className="w-full border-collapse text-xs font-mono text-left">
          <thead>
            <tr className="bg-[#f3f2f1] text-slate-600 font-semibold border-b border-slate-300 text-center">
              <th className="w-12 p-1.5 border-r border-slate-300 bg-[#e1dfdd]"></th>
              <th className="p-1.5 border-r border-slate-300 w-1/5">A</th>
              <th className="p-1.5 border-r border-slate-300 w-1/4">B</th>
              <th className="p-1.5 border-r border-slate-300 w-1/5">C</th>
              <th className="p-1.5 border-r border-slate-300 w-1/5">D</th>
              <th className="p-1.5 border-r border-slate-300 w-1/5">E</th>
            </tr>
          </thead>
          <tbody>
            {excelRows.map((r) => (
              <tr key={r.row} className="border-b border-slate-200">
                <td className="bg-[#f3f2f1] text-center font-bold text-slate-500 border-r border-slate-300 p-1">
                  {r.row}
                </td>
                <td
                  onClick={() => handleCellClick(`A${r.row}`, r.a)}
                  className={`p-2 border-r border-slate-200 cursor-pointer ${selectedCell === `A${r.row}` ? 'bg-green-100 ring-2 ring-green-600' : 'hover:bg-slate-50'}`}
                >
                  {r.a}
                </td>
                <td
                  onClick={() => handleCellClick(`B${r.row}`, r.b)}
                  className={`p-2 border-r border-slate-200 cursor-pointer ${selectedCell === `B${r.row}` ? 'bg-green-100 ring-2 ring-green-600' : 'hover:bg-slate-50'}`}
                >
                  {r.b}
                </td>
                <td
                  onClick={() => handleCellClick(`C${r.row}`, r.c)}
                  className={`p-2 border-r border-slate-200 cursor-pointer ${selectedCell === `C${r.row}` ? 'bg-green-100 ring-2 ring-green-600' : 'hover:bg-slate-50'}`}
                >
                  {r.c}
                </td>
                <td
                  onClick={() => handleCellClick(`D${r.row}`, r.d)}
                  className={`p-2 border-r border-slate-200 cursor-pointer font-bold text-green-800 ${selectedCell === `D${r.row}` ? 'bg-green-100 ring-2 ring-green-600' : 'hover:bg-slate-50'}`}
                >
                  {r.d}
                </td>
                <td
                  onClick={() => handleCellClick(`E${r.row}`, r.e)}
                  className={`p-2 border-r border-slate-200 cursor-pointer ${r.e === '#REF!' ? 'text-red-600 font-bold bg-red-50' : 'text-slate-700'} ${selectedCell === `E${r.row}` ? 'bg-green-100 ring-2 ring-green-600' : 'hover:bg-slate-50'}`}
                >
                  {r.e}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Sheet Tabs */}
      <div className="bg-[#f3f2f1] border-t border-slate-300 px-4 py-1.5 flex items-center justify-between text-xs font-sans text-slate-700">
        <div className="flex items-center gap-2">
          <span className="bg-white border-t-2 border-[#107c41] px-3 py-1 font-bold text-[#107c41] shadow-sm">
            Q3_Summary
          </span>
          <span className="px-3 py-1 text-slate-500 hover:text-slate-900 cursor-pointer">
            Appraisal_Hikes_2026
          </span>
          <span className="px-3 py-1 text-slate-500 hover:text-slate-900 cursor-pointer">
            Leave_Balance
          </span>
        </div>

        <div className="text-[11px] text-slate-500 font-mono">
          READY • Calculate Average: $ 62,950
        </div>
      </div>

    </div>
  );
};
