/* Shared deterministic reward rules; no network or payout integration. */
const RewardRules = {
  points: 100,
  code(value) { const c=String(value||'').trim().toUpperCase(); return /^[A-Z0-9-]{3,32}$/.test(c)?c:null; },
  complete(r) { return !!r.consent && !!r.questions?.length && r.questions.every((q,i)=>String(r.answers?.[i]||'').trim() || r.audios?.[i]?.size>0); },
  duplicate(r, rows) { return rows.some(x=>x.id!==r.id && !x.sample && x.participant===r.participant && x.survey===r.survey && x.rewardState==='Approved'); },
  eligible(r, rows) { return !r.sample && !!this.code(r.participant) && this.complete(r) && !this.duplicate(r,rows); },
  balance(member, rows, claims) { const own=rows.filter(r=>!r.sample&&r.participant===member); const approved=own.filter(r=>r.rewardState==='Approved'); const earned=approved.length*this.points; const spent=claims.filter(c=>c.participant===member).reduce((sum,c)=>sum+c.cost,0); return {earned,spent,available:earned-spent,approved:approved.length,pending:own.filter(r=>['Pending','On hold'].includes(r.rewardState)).length*this.points}; }
};
if(typeof module!=='undefined')module.exports=RewardRules;
